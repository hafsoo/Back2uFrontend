import React from "react";
import { Upload, Cpu, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "Report Your Item",
    description:
      "Upload photos and details of your lost or found item with our simple form.",
    Icon: Upload,
  },
  {
    id: 2,
    title: "AI Matches Items",
    description:
      "Our AI analyzes images and metadata to find potential matches automatically.",
    Icon: Cpu,
  },
  {
    id: 3,
    title: "Connect Securely",
    description:
      "Chat with the finder or owner through our secure messaging system.",
    Icon: MessageCircle,
  },
  {
    id: 4,
    title: "Recover Your Item",
    description:
      "Arrange a safe pickup on campus and get your belongings back!",
    Icon: CheckCircle,
  },
];

const Working = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#020617] to-[#020617] text-white">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          How{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Back2U
          </span>{" "}
          Works
        </h2>
        <p className="mt-4 text-gray-400">
          A simple and powerful process to recover your lost items faster.
        </p>
      </div>

      {/* Steps */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto relative">

        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            
            {/* Step Card */}
            <div className="group relative flex flex-col items-center text-center w-full md:w-1/4">
              
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10 bg-[#020617] border border-[#1e293b] rounded-2xl p-6 w-full hover:border-cyan-400/50 transition duration-300 shadow-xl">
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl bg-cyan-400/10 mb-4">
                  <step.Icon className="text-cyan-400 w-8 h-8" />
                </div>

                {/* Step Number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs px-3 py-1 rounded-full shadow">
                  Step {step.id}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mt-2">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mt-2">
                  {step.description}
                </p>
              </div>
            </div>

            {/* 🔥 Animated Arrow */}
            {index < steps.length - 1 && (
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="text-cyan-400 w-8 h-8 animate-pulse" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <Link to="/report-lost">
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
            Start Finding Your Items
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Working;

/*
import React from "react";
import { Upload, Cpu, MessageCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "Report Your Item",
    description:
      "Upload photos and details of your lost or found item with our simple form.",
    Icon: Upload,
  },
  {
    id: 2,
    title: "AI Matches Items",
    description:
      "Our AI analyzes images and metadata to find potential matches automatically.",
    Icon: Cpu,
  },
  {
    id: 3,
    title: "Connect Securely",
    description:
      "Chat with the finder or owner through our secure messaging system to verify ownership.",
    Icon: MessageCircle,
  },
  {
    id: 4,
    title: "Recover Your Item",
    description:
      "Arrange a safe pickup on campus and get your belongings back!",
    Icon: CheckCircle,
  },
];

const Working = () => {
  return (
    <section id="working" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          How{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#f97316]">
            Back2U
          </span>{" "}
          Works
        </h2>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Four simple steps to reunite you with your lost belongings.
        </p>
      </div>

      <div className="relative mt-12 max-w-6xl mx-auto px-4">
      
        <div className="hidden md:block absolute left-0 right-0 top-28 h-px bg-gray-200 z-0" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative z-10 flex-1 flex flex-col items-center text-center md:text-center"
            >
             
              <div className="relative">
                <div className="w-28 h-28 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100">
                  <step.Icon className="w-10 h-10 text-sky-500" aria-hidden />
                </div>

               
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-semibold text-sm border border-sky-200 shadow-sm">
                    {step.id}
                  </div>
                </div>
              </div>

             
              <h3 className="mt-6 text-lg font-semibold text-gray-800">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-500 max-w-xs">{step.description}</p>

              
              {index < steps.length - 1 && (
                <div className="md:hidden mt-6 w-full h-px bg-gray-200" />
              )}
            </div>
          ))}
        </div>

     
        <div className="mt-10 text-center">
        <Link to="/report-lost">
          <button
            type="button"
            className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-[#0284c7] to-[#f97316] text-white font-medium shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0284c7]"
          >
            Start Finding Your Items Now
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Working;
*/