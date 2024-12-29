import { FeaturesGrid } from "./FeaturesGrid";
import SparklesText from "./ui/sparkles-text";

export default function FeaturesSection() {
  return (
    <div className="bg-gray-950/[98.25%] text-gray-200 py-20" id="features">
      <div className="container max-w-5xl mx-auto px-4 md:px-12 lg:px-4">
        <div className="text-center">
          <h2 className="text-[42px] font-bold mb-4 tracking-wide">
            <SparklesText
              text="AI-Powered"
              sparklesCount={3}
              className="inline text-[42px] font-bold tracking-wide"
            />{" "}
            Features That Drive{" "}
            <span className="inline text-blue-500">Results.</span>
          </h2>
          <p className="text-lg text-gray-400 tracking-wider leading-7 lg:leading-8 max-w-2xl mx-auto mb-16">
            Transform your dealership with intelligent features that capture,
            streamline, and convert leads while you focus on growth.
          </p>
        </div>
        <FeaturesGrid />
      </div>
    </div>
  );
}
