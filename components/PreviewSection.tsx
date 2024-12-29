import BlurFade from "./ui/blur-fade";
import Safari from "./ui/safari";

export default function PreviewSection() {
  return (
    <div className="relative w-full max-w-5xl mx-auto pb-20" id="product">
      <BlurFade inView inViewMargin="-25px" delay={0.8} direction="up">
        <Safari
          url="affinity.ai"
          className="size-full"
          imageSrc="https://via.placeholder.com/1200x750"
        />
      </BlurFade>
    </div>
  );
}
