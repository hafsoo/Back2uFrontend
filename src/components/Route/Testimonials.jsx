import React from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CS Junior",
    text: `"I lost my laptop charger in the engineering building and had it back within an hour. The AI matching is insanely accurate!"`,
  },
  {
    name: "Marcus Williams",
    role: "Biology Senior",
    text: `"Found someone's AirPods in the library and posted them on Back2U. The owner contacted me in 15 minutes. This app is a game-changer."`,
  },
  {
    name: "Priya Sharma",
    role: "MBA Student",
    text: `"Lost my favorite water bottle three times this semester. Back2U helped me recover it every single time. Absolutely essential."`,
  },
];

const Testimonials = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#020617] to-[#020617] py-20 px-6 md:px-20">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-sm text-cyan-400 tracking-widest mb-3">
          TESTIMONIALS
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Loved by{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Students Everywhere
          </span>
        </h2>

        <p className="text-gray-400 mt-4 text-sm md:text-base max-w-2xl mx-auto">
          Thousands of students trust Back2U to recover their belongings. Here's what they say.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="relative bg-[#020617] border border-[#1e293b] rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 shadow-lg"
          >
            {/* Quote Icon */}
            <div className="text-cyan-400 text-3xl mb-4">❝</div>

            {/* Text */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {item.text}
            </p>

            {/* Bottom */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-semibold text-sm">
                  {item.name}
                </h4>
                <p className="text-gray-500 text-xs">{item.role}</p>
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-cyan-400 text-sm">
                ★★★★★
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;