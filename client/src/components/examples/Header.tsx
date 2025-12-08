import Header from "../Header";

export default function HeaderExample() {
  return (
    <div className="relative min-h-[200px] bg-primary">
      <Header scrolled={false} />
      <div className="pt-24 px-4">
        <p className="text-white text-center">Header on dark background</p>
      </div>
    </div>
  );
}
