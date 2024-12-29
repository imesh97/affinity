import BlurFade from "./ui/blur-fade";
import Safari from "./ui/safari";

export default function PreviewSection() {
  return (
    <div
      className="relative w-full max-w-5xl mx-auto px-4 md:px-12 pb-20"
      id="product">
      <BlurFade
        inView
        inViewMargin="-25px"
        offset={20}
        delay={0.8}
        direction="up"
        blur="0px">
        <Safari
          url="affinity.ai"
          className="size-full"
          imageSrc="https://via.placeholder.com/1200x750"
        />
      </BlurFade>
    </div>
  );
}
