import Card from "./Card";

const Hero2 = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-center mb-10">
        <h1 className="spectral-bold  text-5xl text-slate-700">
          How Inshort Works
        </h1>
      </div>
      <div className="flex gap-8">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Hero2;
