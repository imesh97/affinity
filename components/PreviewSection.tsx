import Safari from "./ui/safari";

export default function PreviewSection() {
  return (
    <div
      className="hidden md:block relative w-full max-w-5xl 2xl:max-w-6xl mx-auto px-6 md:px-12 lg:px-8 pb-20"
      id="product"
    >
      <Safari
        url="affinity.ai"
        className="size-full border-none shadow-lg"
        imageSrc="/assets/cta.png"
      />
    </div>
  );
}
