"use client";

import { useActionState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import ShinyButton from "./ui/shiny-button";
import { bookDemoAction } from "@/actions/mail";
import { toast } from "sonner";
import { BookDemoSchema } from "@/lib/schemas";
import { useFormStore } from "@/store/form";

export default function CtaSection() {
  const { email: ctaEmail, setEmail } = useFormStore();

  const [state, dispatch, isPending] = useActionState(bookDemoAction, {
    success: "",
    error: undefined,
  });

  useEffect(() => {
    if (state.success) {
      toast.success(state.success);
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state]);

  const handleSubmit = (formData: FormData) => {
    const data = Object.fromEntries(formData);
    const result = BookDemoSchema.safeParse(data);

    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }
    dispatch(formData);
  };

  return (
    <section
      className="bg-gray-950 pt-12 pb-28 md:pt-16 lg:pb-36 2xl:pt-16"
      id="demo"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[42px] 2xl:text-5xl font-bold text-center mb-4 2xl:mb-6 text-gray-200">
            Ready to <span className="inline text-blue-500">Transform</span>{" "}
            Your Sales Team?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl 2xl:max-w-3xl mx-auto mb-10 2xl:mb-12 px-4 md:px-0 leading-7 lg:leading-8">
            It&apos;s time to give them an <b>unfair advantage</b>. Schedule a{" "}
            <b>personalized demo</b> and see the future of automotive sales.
          </p>
          <form
            action={handleSubmit}
            className="flex flex-col md:flex-col items-center justify-center gap-4 max-w-xl mx-auto px-4 md:px-0"
          >
            <div className="relative size-full rounded-[150px]">
              <Input
                name="name"
                disabled={isPending}
                type="text"
                placeholder="Your full name..."
                className="mb-4 text-center md:text-left placeholder:text-gray-400 placeholder:font-light placeholder:text-base placeholder:md:text-lg text-base md:text-lg text-gray-200 bg-gray-800 border-gray-700 rounded-[150px] w-full h-12 md:h-16 pl-5"
              />

              <Input
                name="company"
                disabled={isPending}
                type="text"
                placeholder="Your company name..."
                className="mb-4 text-center md:text-left placeholder:text-gray-400 placeholder:font-light placeholder:text-base placeholder:md:text-lg text-base md:text-lg text-gray-200 bg-gray-800 border-gray-700 rounded-[150px] w-full h-12 md:h-16 pl-5"
              />
              <Input
                name="phone"
                disabled={isPending}
                type="text"
                placeholder="Your phone number..."
                className="mb-4 text-center md:text-left placeholder:text-gray-400 placeholder:font-light placeholder:text-base placeholder:md:text-lg text-base md:text-lg text-gray-200 bg-gray-800 border-gray-700 rounded-[150px] w-full h-12 md:h-16 pl-5"
              />
              <Input
                name="email"
                disabled={isPending}
                type="email"
                placeholder="Your email address..."
                className="mb-4 text-center md:text-left placeholder:text-gray-400 placeholder:font-light placeholder:text-base placeholder:md:text-lg text-base md:text-lg text-gray-200 bg-gray-800 border-gray-700 rounded-[150px] w-full h-12 md:h-16 pl-5"
                value={ctaEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <ShinyButton
              type="submit"
              disabled={isPending}
              className="bg-gray-200 h-12 md:h-16 w-full rounded-[150px]"
            >
              {isPending ? (
                "Sending..."
              ) : (
                <span>
                  <span className="hidden md:inline xl:hidden">Book</span>
                  <span className="inline md:hidden xl:inline">
                    Book a Demo
                  </span>
                </span>
              )}
            </ShinyButton>
          </form>
        </div>
      </div>
    </section>
  );
}
