import Image from "../assets/hiw-1st.webp"
const Hero2 = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-center">
        <h1 className="spectral-bold  text-5xl text-slate-600">
          How Inshort Works
        </h1>
      </div>
      <div className="border h-full w-[365px]">
        <img src={Image}/>
        <h4>Step 01</h4>
        <h2>Connect Your Content</h2>
        <p>Link your YouTube channel or content library to InShort</p>
      </div>
    </div>
  );
};

export default Hero2;
