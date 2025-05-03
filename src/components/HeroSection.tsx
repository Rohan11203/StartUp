
import Fetures from "./Fetures";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-6">

        <div className="mt-30">
            <span className="bg-slate-100 spectral-light  rounded-b-5xl p-2">🤩 10,000+ Successfully Project</span>
        </div>
      <h1 className="mt-4 spectral-bold  text-6xl text-slate-700">
        Let AI Handle <br />
        Engagement While You Rest
      </h1>

      <p className="spectral-medium text-lg">
        InShort turns your videos into 24/7 smart assistants that answer
        questions, drive 
        <br />
         engagement, and boost revenue
      </p>

      <div className=" spectral-medium">
        <input placeholder="Enter Your Email" className="border-none outline-none shadow-md h-14 p-4 bg-white rounded-4xl mr-4 w-86"/>
        <button className="border bg-pink-500 text-white h-14 w-26 rounded-4xl">Join Beta</button>
      </div>

      <Fetures />
    </div>
  );
};

export default HeroSection;
