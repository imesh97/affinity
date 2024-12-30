import { FeaturesGrid } from "./FeaturesGrid";
import SparklesText from "./ui/sparkles-text";

export default function FeaturesSection() {
  return (
    <div
      className="bg-gray-950/[98%] text-gray-200 pt-16 pb-20 2xl:pt-20"
      id="features">
      <div className="container max-w-5xl 2xl:max-w-6xl mx-auto px-6 md:px-12 lg:px-8">
        <div className="text-center">
          <h2 className="text-[42px] 2xl:text-5xl font-bold mb-4 2xl:mb-6">
            <SparklesText
              text="AI-Powered"
              sparklesCount={3}
              className="inline"
            />{" "}
            Features <br className="hidden sm:flex lg:hidden" />
            That Drive <span className="inline text-blue-500">Results.</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 tracking-wide leading-7 lg:leading-8 max-w-2xl 2xl:max-w-3xl mx-auto mb-16 mt-4 md:mt-0 px-4 md:px-0">
            Transform your dealership with intelligent features that capture,
            streamline, and convert leads while you focus on growth.
          </p>
        </div>
        <FeaturesGrid />
      </div>
    </div>
  );
}
