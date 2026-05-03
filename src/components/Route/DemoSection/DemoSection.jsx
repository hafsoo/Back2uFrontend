import React, { useState } from "react";
import { PlayCircle, X } from "lucide-react";
import { motion } from "framer-motion";

const DRIVE_FILE_ID = "1zYO2YphfR5qLm0LSSVqXB16B_H2iA80b";
const DRIVE_EMBED = `https://drive.google.com/file/d/${DRIVE_FILE_ID}/preview`;
const DRIVE_THUMBNAIL = `https://drive.google.com/thumbnail?id=${DRIVE_FILE_ID}&sz=w1280`;

const DemoSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full py-16 sm:py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-400/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Watch the Product in Action
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gray-500 max-w-2xl mx-auto mb-10 sm:mb-14 text-base sm:text-lg"
        >
          A real screen recording showing how everything works.
        </motion.p>

        {/* 🎬 Thumbnail Card — clicking opens modal */}
        <motion.div
          className="relative group rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
          onClick={() => setOpen(true)}
        >
          {/* Thumbnail from Drive */}
          <img
            src={DRIVE_THUMBNAIL}
            alt="Demo preview"
            className="w-full h-[220px] sm:h-[320px] md:h-[500px] object-cover group-hover:scale-105 transition duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-full
              bg-white/10 backdrop-blur-lg border border-white/20
              text-white font-semibold text-sm sm:text-lg shadow-xl
              group-hover:scale-110 transition">
              <PlayCircle size={24} className="sm:w-7 sm:h-7" />
              Watch Demo
            </div>
          </div>
        </motion.div>
      </div>

      {/* 🎥 FULL VIDEO MODAL with Drive embed */}
      {open && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-2"
          onClick={() => setOpen(false)} // click backdrop to close
        >
          <div
            className="relative w-full max-w-[900px]"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking video
          >

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-2 sm:right-0 text-white hover:text-gray-300 transition"
            >
              <X size={28} />
            </button>

            {/* Google Drive iframe embed */}
            <iframe
              src={DRIVE_EMBED}
              width="100%"
              height="500"
              allow="autoplay"
              title="Demo Video"
              allowFullScreen
              className="rounded-xl sm:rounded-2xl shadow-2xl border-0"
              style={{ border: "none" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DemoSection;