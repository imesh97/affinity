import { z } from "zod";

export const BookDemoSchema = z.object({
  name: z.string().min(3, "Please enter a valid name."),
  company: z.string().min(3, "Please enter a valid company name."),
  email: z.string().email().min(4, "Please enter a valid email."),
  phone: z
    .string() // TODO: implement better phone number check (basic version right now)
    .min(1, "Please enter a valid phone number.")
    .max(15, "Please enter a valid phone number."),
});
