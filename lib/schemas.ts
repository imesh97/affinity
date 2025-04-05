import { z } from "zod";
import parsePhoneNumberFromString from "libphonenumber-js";

const phoneSchema = z
  .string()
  .nonempty({ message: "Please enter a valid phone number." })
  .refine(
    (number) => {
      try {
        const phoneNumber = parsePhoneNumberFromString(number, {
          // libphonenumber parsing
          defaultCountry: "CA",
          extract: false,
        });
        return phoneNumber && phoneNumber.isValid();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        return false;
      }
    },
    { message: "Please enter a valid phone number." }
  );

export const BookDemoSchema = z.object({
  name: z.string().min(3, "Please enter a valid name."),
  company: z.string().min(3, "Please enter a valid company name."),
  email: z.string().email().min(4, "Please enter a valid email."),
  phone: phoneSchema, // libphonenumber parsing
});
