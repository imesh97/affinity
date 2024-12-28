import Safari from "./ui/safari";

export default function PreviewSection() {
  return (
    <div className="relative w-full max-w-5xl mx-auto pb-20">
      <Safari
        url="affinity.ai"
        className="size-full"
        imageSrc="https://via.placeholder.com/1200x750"
      />
    </div>
  );
}
