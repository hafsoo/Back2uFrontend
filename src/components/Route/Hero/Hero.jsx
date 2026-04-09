import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div
      id="Home"
      className="relative w-full min-h-[auto] md:min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
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
      <div className="relative z-10 hidden md:w-1/2 md:flex justify-center mb-12 md:mb-0">
        <div className="relative group">
          {/* 🔥 Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-600/20 blur-2xl rounded-3xl"></div>

          {/* 📸 Image */}
          <img
            src="/images/hero.jpeg"
            alt="Campus"
            className="relative w-full h-[420px] lg:h-[500px] object-cover rounded-2xl shadow-2xl border border-white/10 transition-all duration-500 hover:scale-105 translate-x-4"
          />
          {/* 💬 Floating Notification (like screenshot) */}
          <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">
              ✨
            </div>

            <div>
              <p className="text-white text-sm font-semibold">
                AI Match Found!
              </p>
              <p className="text-gray-300 text-xs">
                Your item was found at library — 2 min ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;