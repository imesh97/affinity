import { mailTemplates } from "@/constants";
import sgMail, { MailDataRequired } from "@sendgrid/mail";

type Props = {
  to: string;
  template: "BookDemo"; // pass mail template names
  dynamicTemplateData: Record<string, string>;
};

export const sendEmail = async ({
  to,
  template,
  dynamicTemplateData,
}: Props) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
  const msg: MailDataRequired = {
    to,
    from: {
      email: process.env.SENDER_EMAIL!,
      name: "Affinity",
    },
    templateId: mailTemplates[template], // get template id
    dynamicTemplateData,
  };
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
};

// TODO: Setup custom domain on SendGrid and change .env.SENDER_EMAIL
