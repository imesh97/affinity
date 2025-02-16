import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { companies } from "@/constants";

const TrustedCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div
      className={cn(
        "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4 items-center justify-center",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
      )}
    >
      <img
        className="filter grayscale transition-all duration-300 ease-out hover:grayscale-0"
        width="64"
        height="64"
        alt={name}
        src={img}
      />
    </div>
  );
};

export function TrustedSection() {
  return (
    <div className="container mx-auto px-4 pb-12">
      <h2 className="text-center text-gray-500 text-base font-semibold tracking-wider mb-4">
        TRUSTED BY LEADING DEALERSHIPS
      </h2>
      <div className="relative flex h-full max-w-5xl mx-auto flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover={false} className="[--duration:20s]">
          {companies.map((company) => (
            <TrustedCard key={company.name} {...company} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-950"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-950"></div>
      </div>
    </div>
  );
}
