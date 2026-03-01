import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div
      id="Home"
      className="relative w-full min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-400/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-orange-400/30 rounded-full blur-[120px]" />

      {/* Left Side: Text Section */}
      <div className="relative z-10 md:w-1/2 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-blue-100 shadow-sm mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-600 font-medium">
            AI Powered Campus Recovery System
          </span>
        </div>

        <h1 className="text-[40px] md:text-[60px] font-extrabold leading-[1.1] text-gray-900">
          Lost Something? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500">
            <Typewriter
              words={[
                "We’ll Help You to Find It Faster",
                "We’ll Help You to Track It Smarter",
                "We’ll Help You to Recover It Easily",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </span>
        </h1>

        <p className="mt-6 text-[17px] text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
          Back2U uses AI-powered image recognition to instantly match lost and
          found items across your University Campus. Report, Search, and Recover
          your belongings smarter and faster.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mt-10 justify-center md:justify-start">
          <Link to="/report-lost">
            <button className="relative px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300">
              Report Lost Item
            </button>
          </Link>

          <Link to="/report-found">
            <button className="px-8 py-3.5 rounded-xl font-semibold bg-white/80 backdrop-blur-md border border-gray-200 text-gray-800 hover:border-indigo-500 hover:text-indigo-600 hover:scale-105 transition-all duration-300 shadow-md">
              Report Found Item
            </button>
          </Link>
        </div>
      </div>

      {/* Right Side: Image Section */}
      <div className="relative z-10 md:w-1/2 flex justify-center mb-12 md:mb-0">
        <div className="relative group">
          {/* Background Card Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl rotate-6 scale-105 opacity-20 group-hover:rotate-3 transition-all duration-500"></div>

          <img
            src="/images/unii.png"
            alt="Students using Back2U app"
            className="relative rounded-3xl shadow-2xl w-[95%] md:w-[85%] object-cover border border-white/40 backdrop-blur-lg group-hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;



/* 
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div id="Home"
      className={`w-full min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-10 bg-gradient-to-r from-[#f8fbff] to-[#e8f0ff]`}

    >
     
      <div 
       className="md:w-1/2 text-center md:text-left"
       >
        <h1 className="text-[36px] md:text-[56px] font-[700] leading-tight text-[#1f2937]">
          Lost Something? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] to-[#f97316]">
            We’ll Help You
          </span>{" "}
          <br />
          Find It
        </h1>

        <p className="mt-5 text-[16px] text-gray-600 font-[400] leading-relaxed">
          Back2U uses AI-powered image recognition to match lost and found items
          on your university campus. Report, search, and recover your belongings
          faster than ever.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
          <Link to="/report-lost">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-all">
              Report Lost Item
            </button>
          </Link>

          <Link to="/report-found">
            <button className="bg-white border border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-6 py-3 rounded-lg font-medium shadow-md transition-all">
              Report Found Item
            </button>
          </Link>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="/images/unii.png"
          alt="Students using Back2U app"
          className="rounded-2xl shadow-lg w-[95%] md:w-[80%] object-cover"
          

        />
      </div>
    </div>
  );
};

export default Hero;

*/
