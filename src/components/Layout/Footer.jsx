import React from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      //className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 overflow-hidden">
      className="relative  bg-gradient-to-b from-[#020617] to-[#020617] text-white overflow-hidden"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-blue-300/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[350px] h-[350px] bg-indigo-500/20 rounded-full blur-[120px]" />
      <div className="absolute top-[40%] left-[50%] w-[250px] h-[250px] bg-orange-500/10 rounded-full blur-[120px]" />

      {/* Main Footer */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6 md:px-20 py-20">
        {/* Logo + About */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          
          <Link to="/" className="group flex items-center gap-3 mb-4">
    {/* Icon */}
    <div className="w-[62px] h-[62px] rounded-[12px] border border-cyan-400/40 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-cyan-400/70">
      <img
        src="/images/my.png"
        alt="Back2U Logo"
        className="w-full h-full object-contain scale-110"
      />
       </div>

    {/* Text */}
    <div className="flex flex-col leading-tight">
      <span className="text-xl font-extrabold tracking-wide text-white">
        BACK<span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">2U</span>
      </span>
      <span className="text-[8px] text-gray-400 tracking-[0.3em] uppercase">
        Lost &amp; Found System
      </span>
    </div>
  </Link>
          <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
            AI-powered lost & found platform for university campuses. Never lose
            anything again.{" "}
            <span className="text-white font-medium">Free. Trusted. Fast.</span>
          </p>

          <div className="flex items-center mt-6 space-x-5">
            <AiFillFacebook
              size={26}
              className="cursor-pointer text-white hover:text-blue-500 transition duration-300 hover:scale-110"
            />
            <AiOutlineTwitter
              size={26}
              className="cursor-pointer text-white hover:text-sky-400 transition duration-300 hover:scale-110"
            />
            <AiFillInstagram
              size={26}
              className="cursor-pointer text-white hover:text-pink-500 transition duration-300 hover:scale-110"
            />
            <AiFillYoutube
              size={26}
              className="cursor-pointer text-white hover:text-red-500 transition duration-300 hover:scale-110"
            />
          </div>
        </div>

        {/* Platform Links */}
        <ul className="text-center sm:text-left">
          <h1 className="mb-5 font-semibold text-white tracking-wide">
            PLATFORM
          </h1>
          {footercompanyLinks.map((link) => (
            <li key={link.name} className="mb-2">
              <Link
                to={link.link}
                className="text-gray-400 hover:text-white transition duration-300 text-sm"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Support Links */}
        <ul className="text-center sm:text-left">
          <h1 className="mb-5 font-semibold text-white tracking-wide">
            SUPPORT
          </h1>
          {footerSupportLinks.map((link) => (
            <li key={link.name} className="mb-2">
              <Link
                to={link.link}
                className="text-gray-400 hover:text-white transition duration-300 text-sm"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Links */}
        <ul className="text-center sm:text-left">
          <h1 className="mb-5 font-semibold text-white tracking-wide">
            CONTACT
          </h1>
          {footerProductLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li
                key={link.name}
                className="flex items-center justify-center sm:justify-start gap-3 mb-2"
              >
                <Icon className="text-indigo-400" size={18} />
                <Link
                  to={link.link}
                  className="text-gray-400 hover:text-white transition duration-300 text-sm"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4">
          <span>© 2026 Back2U. All rights reserved.</span>

          <div className="flex items-center gap-3">
            <Link to="#" className="hover:text-white transition">
              Built with 💙 for university campuses everywhere
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
