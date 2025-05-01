import "./App.css";
import "./index.css"
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Hero2 from "./components/Hero2";

function App() {
  return (
    <>
      <div className="absolute h-screen w-full overflow-x-hidden ">
      <div className="absolute rounded-xl top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
        <div className="fixed top-0 left-0 right-0 z-10  max-w-4xl mx-auto px-4">
          <Navbar />
        </div>

        <div className=" max-w-4xl mx-auto px-4 text-center">
            <HeroSection />
        </div>

        <div className=" mt-40 max-w-5xl mx-auto px-4">
         <Hero2 />
        </div>
      </div>
    </>
  );
}

export default App;
