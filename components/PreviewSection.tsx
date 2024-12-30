import Safari from "./ui/safari";

export default function PreviewSection() {
  return (
    <div
      className="relative w-full max-w-5xl mx-auto px-4 md:px-12 lg:px-4 pb-20"
      id="product">
      <Safari
        url="affinity.ai"
        className="size-full"
        imageSrc="https://via.placeholder.com/1200x750"
      />
    </div>
  );
}
