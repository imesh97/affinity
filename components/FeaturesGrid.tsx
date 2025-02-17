import {
  Target,
  Database,
  Share2Icon,
  ChartSpline,
  Split,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";
import IntegrationsBeam from "@/components/IntegrationsBeam";
import FollowupList from "@/components/FollowupList";
import { CustomerJourney } from "@/components/CustomerJourney";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import AnalyticsDemo from "./AnalyticsDemo";
import LeadBar from "./LeadBar";

const recordsSample = [
  {
    name: "Lead: Sarah Martinez",
    body: "Interested in 2024 Tesla Model Y, viewed 5 times, scheduled test drive for next week. AI Insight: 85% likely to purchase in next 30 days",
  },
  {
    name: "Client: Mike Chen",
    body: "Owner of 2022 BMW X5, due for maintenance in 2 weeks. Previous purchases: 3 vehicles. Predicted interest: Electric vehicles",
  },
  {
    name: "Lead: James Wilson",
    body: "Browsing SUVs $40-60k range, engaged with email campaign, requested pricing on Honda Pilot. Lead score: High priority",
  },
  {
    name: "Client: Emily Thompson",
    body: "Recent service: Oil change (03/15/24). Trade-in potential: 75%. AI suggests: Follow-up about 2024 Lexus RX upgrade",
  },
  {
    name: "Lead: Robert Davis",
    body: "Comparing Mercedes GLC vs BMW X3, downloaded pricing sheet, opened 8 emails. AI Recommendation: Schedule virtual tour",
  },
  {
    name: "Client: Lisa Rodriguez",
    body: "Lease ending in 45 days on 2021 Audi Q5. Customer loyalty: Platinum tier. AI Alert: High retention opportunity",
  },
  {
    name: "Lead: David Kim",
    body: "Looking for family SUV, budget $55k, viewed inventory 12 times. AI Analysis: Ready for sales contact, prefers evening calls",
  },
  {
    name: "Client: Amy Foster",
    body: "Service history: 4 visits in 2024. Vehicle: 2023 Toyota Highlander. AI Insight: Consider extended warranty offer",
  },
];

const features = [
  {
    Icon: Target,
    name: "Lead Generation & Scoring",
    description: "Instantly prioritize and engage your most promising leads.",
    className: "col-span-3 md:col-span-1",
    href: "#demo",
    cta: "Learn more",
    background: (
      <LeadBar className="absolute left-32 sm:left-24 top-10 h-full w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] bg-gray-950" />
    ),
  },
  {
    Icon: Zap,
    name: "Sales Pipeline Automation",
    description: "Automate follow-ups and communications while closing deals.",
    href: "#demo",
    cta: "Learn more",
    className: "col-span-3 md:col-span-2",
    background: (
      <FollowupList className="absolute -right-8 top-4 h-[300px] 2xl:h-[400px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Seamless Integration",
    description: "Connect with your existing dealership tools and systems.",
    href: "#demo",
    cta: "Learn more",
    className: "col-span-3 md:col-span-2",
    background: (
      <IntegrationsBeam className="absolute top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]" />
    ),
  },
  {
    Icon: Database,
    name: "Customer Data Management",
    description:
      "All customer interactions and history in one unified platform.",
    href: "#demo",
    cta: "Learn more",
    className: "col-span-3 md:col-span-1",
    background: (
      <Marquee className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] blur-[0.75px]">
        {recordsSample.map((record, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
              "blur-[1px] transition-all duration-300 ease-out"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium">
                  {record.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{record.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Split,
    name: "Journey Mapping",
    description:
      "Visualize and optimize every step of the customer's buying journey.",
    href: "#demo",
    cta: "Learn more",
    className: "col-span-3 md:col-span-1",
    background: (
      <CustomerJourney className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]" />
    ),
  },
  {
    Icon: ChartSpline,
    name: "Predictive Analytics",
    description:
      "Predict buyer behavior and identify sales opportunities using AI.",
    href: "#demo",
    cta: "Learn more",
    className: "col-span-3 md:col-span-2 text-gray-200",
    background: (
      <AnalyticsDemo className="absolute right-2 top-4 w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]" />
    ),
  },
];

export function FeaturesGrid() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
