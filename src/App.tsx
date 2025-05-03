import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="relative h-screen w-full overflow-x-hidden ">
        <div className="absolute top-0 left-0 h-[100vh] md:h-[150vh] lg:h-[180vh] w-[12vw] z-10">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 200 800"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 h-full w-full"
          >
            <path
              d="M0 0 C0 0, 150 100, 180 400 C200 650, 120 780, 0 800 L0 0 Z"
              fill="url(#paint0_linear_left)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_left"
                x1="100"
                y1="0"
                x2="100"
                y2="800"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#FFF1F2" stop-opacity="0.7" />
                <stop offset="0.5" stop-color="#FBCFE8" stop-opacity="0.7" />
                <stop offset="1" stop-color="#FFF1F2" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute top-0 right-0 h-[100vh] md:h-[150vh] lg:h-[180vh] w-[12vw] z-10">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 200 800"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 right-0 h-full w-full"
          >
            <path
              d="M200 0 C200 0, 80 100, 40 400 C20 600, 100 780, 200 800 L200 0 Z"
              fill="url(#paint0_linear_right)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_right"
                x1="100"
                y1="0"
                x2="100"
                y2="800"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#FFF1F2" stop-opacity="0.7" />
                <stop offset="0.5" stop-color="#FBCFE8" stop-opacity="0.7" />
                <stop offset="1" stop-color="#FFF1F2" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute rounded-xl top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
        <div className="fixed top-0 left-0 right-0 z-10  max-w-4xl mx-auto px-4">
          <Navbar />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <HeroSection />
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className=" mt-40  max-w-6xl mx-auto px-4">
            <Hero2 />
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-0 -z-10 h-full w-full bg-white">
            <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
          </div>
          <div className="my-40  max-w-6xl mx-auto px-4">
            <Hero3 />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pt-28 mb-40 p-12 rounded-4xl bg-gradient-to-b from-pink-100 to-white">
          <h1 className="text-center spectral-bold  text-6xl text-slate-700">
            <span>Turn Your Content Into an</span>
            <br />
            <span>AI Assistant Today</span>
          </h1>
          <p className="text-center text-lg p-4">
            No code. No prompt engineering. Just results.
          </p>
          <div className="text-center pt-4 spectral-medium">
            <input
              placeholder="Enter Your Email"
              className="border-none outline-none shadow-md h-14 p-4 bg-white rounded-4xl mr-4 w-86"
            />
            <button className="border bg-pink-500 text-white h-14 w-26 rounded-4xl">
              Join Beta
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
