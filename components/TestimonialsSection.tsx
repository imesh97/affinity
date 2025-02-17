import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Marquee from "./ui/marquee";
import { testimonials } from "@/constants";

const TestimonialCard = ({
  quote,
  author,
  role,
  avatar,
}: {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}) => (
  <Card className="relative w-64 md:w-72 cursor-pointer bg-gray-900/50 border-none hover:bg-gray-800/50 transition-colors duration-300">
    <CardContent className="flex flex-col h-full p-6">
      <div className="flex-grow">
        <p className="text-gray-300 transition-all mb-4 font-normal">{quote}</p>
      </div>
      <div className="flex items-center mt-auto">
        <Avatar className="h-10 w-10 mr-4">
          <AvatarImage src={avatar} alt={author} />
          <AvatarFallback className="bg-gray-300">
            {author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-gray-300">{author}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function TestimonialsSection() {
  return (
    <div
      className="bg-gray-950 py-12 md:pt-20 lg:pb-24 2xl:pt-20"
      id="testimonials"
    >
      <div className="container max-w-5xl 2xl:max-w-6xl mx-auto px-6 md:px-12 lg:px-8">
        <h2 className="text-[42px] 2xl:text-5xl font-bold text-center mb-4 2xl:mb-6 text-gray-200">
          Real <span className="inline text-blue-500">Wins</span>{" "}
          <br className="flex md:hidden" />
          From Real <span className="inline text-blue-500">Dealerships</span>.
        </h2>

        <p className="text-lg lg:text-xl text-center text-gray-400 tracking-wide leading-7 lg:leading-8 mb-12 lg:mb-16 max-w-2xl 2xl:max-w-3xl mx-auto mt-4 md:mt-0 px-4 md:px-0">
          From <b>small independent lots</b> to <b>large franchises,</b> see how
          our AI technology is helping sales teams <b>exceed their targets</b>{" "}
          nationwide.
        </p>

        {/* REMOVED MAIN BLOCKQUOTE (for now)

         <div className="max-w-3xl mx-auto mb-20">
          <blockquote className="text-2xl md:text-3xl text-gray-200 text-center">
            <QuoteIcon className="w-12 h-12 text-blue-500 mx-auto mb-8" />
          </blockquote>
          <div className="z-10 flex mb-8 items-center justify-center rounded-lg text-center mx-auto">
            <TextReveal
              text="Finally, an AI system that actually understands the car business."
              className="text-center items-center justify-center"
            />
          </div>
          <div className="flex items-center justify-center mx-auto">
            <Avatar className="h-10 w-10 mx-4">
              <AvatarImage
                src={"/placeholder.svg?height=40&width=40"}
                alt={"John Cena"}
              />
              <AvatarFallback>
                {"John Cena"
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-semibold text-gray-300">John Cena</p>
              <p className="text-sm text-gray-400">CEO, Automotive Inc.</p>
            </div>
          </div>
        </div> */}

        <div className="relative flex h-full max-w-5xl 2xl:max-w-6xl mx-auto flex-col items-center justify-center overflow-hidden mt-2">
          <Marquee pauseOnHover={true} className="[--duration:20s]">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-950/[98%]"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-950/[98%]"></div>
        </div>
      </div>
    </div>
  );
}
