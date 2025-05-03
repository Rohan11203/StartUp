const Hero3 = () => {
  return (
    <div className="">
      <h2 className="text-center spectral-bold  text-5xl text-slate-700">
        <span>What Makes</span>
        <br />
        <span>Inshort Effortless Yet Powerful</span>
      </h2>

      <div className="flex my-24 gap-10">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-4 ">
            <div className="border border-slate-200 spectral-medium w-42 px-6 py-2 rounded-xl "> 
                SSo integration
            </div>
          <h2 className="spectral-bold text-slate-750 text-5xl">
            Easy Login using <br /> Single Sign On ( SSO )
          </h2>
          <p className="spectral-light text-lg py-2">
            SImple two click sign up and enrollement process for your users.
          </p>
          <button className="bg-gradient-to-r from-slate-900 to-slate-500 spectral-bold text-lg  shadow-xl rounded-3xl p-3 h-12 w-42  text-white">
            Get Inshort{" "}
          </button>
        </div>
        {/* Right */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 space-y-6">
            {/* Social icons */}
            <div className="flex justify-center gap-6">
              <button className="p-3 bg-white rounded-full shadow hover:shadow-md transition">
                <img
                  src="/icons/apple.svg"
                  alt="Apple SSO"
                  className="h-6 w-6"
                />
              </button>
              <button className="p-3 bg-white rounded-full shadow hover:shadow-md transition">
                <img
                  src="/icons/google.svg"
                  alt="Google SSO"
                  className="h-6 w-6"
                />
              </button>
              <button className="p-3 bg-white rounded-full shadow hover:shadow-md transition">
                <img src="/icons/x.svg" alt="X SSO" className="h-6 w-6" />
              </button>
            </div>

           
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            {/* Sign Up Button */}
            <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-full font-semibold shadow-lg hover:from-pink-600 transition">
              Sign up &rarr;
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-pink-500 font-medium hover:underline"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
