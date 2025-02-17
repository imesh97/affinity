import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { integrations } from "@/constants";
import Image from "next/image";

const IntegrationCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div
      className={cn(
        "relative w-20 h-20 cursor-pointer overflow-hidden rounded-xl border p-4 items-center justify-center",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
      )}
    >
      <Image
        className="filter grayscale transition-all duration-300 ease-out hover:grayscale-0"
        width="100"
        height="100"
        alt={name}
        src={img}
      />
    </div>
  );
};

export default function IntegrationsSection() {
  return (
    <div className="bg-gradient-to-b from-gray-950/[98%] to-gray-950 to-[90%]">
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-center text-gray-500 text-base font-semibold tracking-wider mb-4">
          INTEGRATES WITH
        </h2>
        <div className="relative flex h-full max-w-4xl mx-auto flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover={false} className="[--duration:20s]">
            {integrations.map((integration) => (
              <IntegrationCard key={integration.name} {...integration} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-950/0"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-950/0"></div>
        </div>
      </div>
    </div>
  );
}
