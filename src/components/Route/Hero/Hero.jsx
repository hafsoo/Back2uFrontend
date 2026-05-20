import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";



const Hero = () => {
  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes blobPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50%       { transform: scale(1.08); opacity: 0.45; }
        }
        @keyframes toastSlide {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes statCount {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0, 191, 255, 0.4); }
          50%       { box-shadow: 0 0 0 8px rgba(0, 191, 255, 0); }
        }

        .hero-badge   { animation: slideUp 0.5s ease 0.1s both; }
        .hero-heading { animation: slideUp 0.6s ease 0.25s both; }
        .hero-sub     { animation: slideUp 0.6s ease 0.4s both; }
        .hero-btns    { animation: slideUp 0.6s ease 0.55s both; }
        .hero-image   { animation: fadeIn 0.8s ease 0.3s both; }
        .toast-card   { animation: toastSlide 0.5s ease 1.2s both; }
        .stat-item    { animation: statCount 0.5s ease both; }
        .stat-item:nth-child(1) { animation-delay: 0.8s; }
        .stat-item:nth-child(2) { animation-delay: 0.95s; }
        .stat-item:nth-child(3) { animation-delay: 1.1s; }
        .stat-item:nth-child(4) { animation-delay: 1.25s; }

        .blob { animation: blobPulse 6s ease-in-out infinite; }
        .blob-2 { animation: blobPulse 8s ease-in-out 2s infinite; }

        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(255,255,255,0.15), transparent);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .btn-primary:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 16px 40px rgba(0, 140, 220, 0.45); }
        .btn-primary:hover::after { opacity: 1; }
        .btn-primary:active { transform: scale(0.98); }

        .btn-outline {
          transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
        }
        .btn-outline:hover { transform: translateY(-2px) scale(1.02); background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.9); }
        .btn-outline:active { transform: scale(0.98); }

        .hero-img-wrap:hover img { transform: scale(1.03) translateX(4px); }
        .hero-img-wrap img { transition: transform 0.5s ease; }

        .toast-icon { animation: glowPulse 2s ease-in-out 1.8s infinite; }

        .stat-divider { width: 1px; height: 28px; background: rgba(0,0,0,0.08); }
      `}</style>

      {/* ── Hero Section ── */}
      <div
        id="Home"
        className="relative w-full min-h-[auto] md:min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
      >
        {/* Decorative Background Blobs */}
        <div className="blob absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-400/30 rounded-full blur-[120px]" />
        <div className="blob-2 absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[120px]" />

        {/* ── Left: Text ── */}
        <div className="relative z-10 md:w-1/2 text-center md:text-left">

          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-blue-100 shadow-sm mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-600 font-medium">
              AI Powered Campus Recovery System
            </span>
          </div>

          {/* Heading — FIX: single cyan color, no gradient */}
          <h1 className="hero-heading text-[40px] md:text-[58px] font-extrabold leading-[1.1] text-gray-900">
            Lost Something?{" "}
            <br />
            <span style={{ color: "#00BFFF" }}>
              <Typewriter
                words={[
                  "We'll Help You Find It Faster",
                  "We'll Help You Track It Smarter",
                  "We'll Help You Recover It Easily",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={65}
                deleteSpeed={38}
                delaySpeed={2200}
              />
            </span>
          </h1>

          {/* Subtext */}
          <p className="hero-sub mt-6 text-[17px] text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            Back2U uses AI-powered image recognition to instantly match lost and
            found items across your University Campus. Report, Search, and Recover
            your belongings smarter and faster.
          </p>

          {/* Buttons */}
          <div className="hero-btns flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
            <Link to="/report-lost">
              <button
                className="btn-primary px-8 py-3.5 rounded-xl font-semibold text-white"
                style={{
                  background: "linear-gradient(135deg, #0284c7, #0ea5e9)",
                  boxShadow: "0 8px 24px rgba(2, 132, 199, 0.35)",
                }}
              >
                Report Lost Item
              </button>
            </Link>

            {/* FIX: white text, transparent bg, white border */}
            <Link to="/report-found">
              <button
                className="btn-outline px-8 py-3.5 rounded-xl font-semibold"
                style={{
                  background: "transparent",
                  border: "2px solid rgba(2, 132, 199, 0.6)",
                  color: "#0284c7",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(2,132,199,0.08)";
                  e.currentTarget.style.borderColor = "#0284c7";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(2,132,199,0.6)";
                }}
              >
                Report Found Item
              </button>
            </Link>
          </div>
        </div>

        {/* ── Right: Image ── */}
        <div className="hero-image relative z-10 hidden md:w-1/2 md:flex justify-center mb-12 md:mb-0">
          <div className="hero-img-wrap relative group">
            {/* Glow halo */}
            <div
              className="absolute inset-0 rounded-3xl blur-2xl"
              style={{ background: "linear-gradient(135deg, rgba(2,132,199,0.25), rgba(14,165,233,0.2))" }}
            />

            {/* Campus image */}
            <img
              src="/images/hero.jpeg"
              alt="Campus"
              className="relative w-full h-[420px] lg:h-[500px] object-cover rounded-2xl border border-white/20"
              style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.18)", transform: "translateX(4px)" }}
            />

            {/* FIX: Animated "AI Match Found!" toast */}
            <div
              className="toast-card absolute bottom-4 left-4 right-4 backdrop-blur-md rounded-xl px-4 py-3 flex items-center gap-3"
              style={{ background: "rgba(0,0,0,0.65)", boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}
            >
              <div
                className="toast-icon w-9 h-9 rounded-lg flex items-center justify-center text-white text-lg flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #0284c7, #00BFFF)" }}
              >
                ✨
              </div>
              <div>
                <p className="text-white text-sm font-semibold">AI Match Found!</p>
                <p className="text-gray-300 text-xs">Your item was found at library — 2 min ago</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Hero;


/*
import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div
      id="Home"
      className="relative w-full min-h-[auto] md:min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
    >
      
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-400/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-orange-400/30 rounded-full blur-[120px]" />

    
      <div className="relative z-10 md:w-1/2 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-blue-100 shadow-sm mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-600 font-medium">
            AI Powered Campus Recovery System
          </span>
        </div>

        <h1 className="text-[40px] md:text-[60px] font-extrabold leading-[1.1] text-gray-900">
          Lost Something? <br />
          <span 
          //className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500"
          className="text-transparent bg-clip-text bg-[#00BFFF] "
          >
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

    
      <div className="relative z-10 hidden md:w-1/2 md:flex justify-center mb-12 md:mb-0">
        <div className="relative group">
      
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-600/20 blur-2xl rounded-3xl"></div>

      
          <img
            src="/images/hero.jpeg"
            alt="Campus"
            className="relative w-full h-[420px] lg:h-[500px] object-cover rounded-2xl shadow-2xl border border-white/10 transition-all duration-500 hover:scale-105 translate-x-4"
          />
       
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

*/