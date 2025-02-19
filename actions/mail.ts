"use server";

import { BookDemoSchema } from "@/lib/schemas";
import { sendEmail } from "@/lib/sendgrid";
import { revalidatePath } from "next/cache";

import arcjet, { shield, detectBot, fixedWindow, request } from "@arcjet/next";

type BookDemoState = {
  success?: string;
  error?: string;
};

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    shield({
      mode: "LIVE",
    }),
    detectBot({
      mode: "LIVE",
      allow: [],
    }),
    fixedWindow({
      mode: "LIVE",
      window: "1m",
      max: 5,
    }),
  ],
});

export async function bookDemoAction(state: BookDemoState, formData: FormData) {
  try {
    const req = await request();
    const decision = await aj.protect(req);

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return { error: "Too many requests. Please try again later." };
      } else if (decision.reason.isBot()) {
        return { error: "You are a bot. Please try again later." };
      }
      return {
        error: "An error occurred during the request.",
      };
    }

    const data = Object.fromEntries(formData.entries());
    const result = BookDemoSchema.safeParse(data);
    if (!result.success) {
      return { error: result.error.errors[0].message };
    }

    const name = data.name as string;
    const company = data.company as string;
    const phone = data.phone as string;
    const email = data.email as string;

    await sendEmail({
      to: process.env.CAPTURE_EMAIL!,
      template: "BookDemo",
      dynamicTemplateData: {
        name,
        company,
        phone,
        email,
      },
    });

    return { success: "Sucessfully booked demo." };
  } catch (error) {
    return {
      error:
        (error as Error)?.message ??
        "Something went wrong. Please try again later.",
    };
  } finally {
    revalidatePath("/");
  }
}

/* export const sendEmailFormAction = async (formData: FormData) => {
  try {
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;

    await sendEmail({
      to: process.env.CAPTURE_EMAIL!,
      template: "BookDemo",
      dynamicTemplateData: {
        name,
        company,
        phone,
        email,
      },
    });

    return { errorMessage: null };
  } catch (error) {
    console.error(error);
    return { errorMessage: "Something went wrong" };
  }
}; */
