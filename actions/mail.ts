"use server";

import { BookDemoSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";

import arcjet, { shield, detectBot, fixedWindow, request } from "@arcjet/next";
import { Resend } from "resend";
import LeadCaptureEmail from "@/emails/lead-capture";

type BookDemoState = {
  success?: string;
  error?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY!); // Resend emails
const aj = arcjet({
  // Arcjet security
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

    await resend.emails.send({
      from: `Affinity <${process.env.SMTP_EMAIL!}>`,
      to: process.env.CAPTURE_EMAIL! as string,
      subject: "New Email Lead Capture - Affinity",
      react: LeadCaptureEmail({ name, company, phone, email }),
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
