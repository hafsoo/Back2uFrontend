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
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 overflow-hidden">

      {/* Decorative Background Blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-blue-300/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[350px] h-[350px] bg-indigo-500/20 rounded-full blur-[120px]" />
      <div className="absolute top-[40%] left-[50%] w-[250px] h-[250px] bg-orange-500/10 rounded-full blur-[120px]" />

      {/* Main Footer */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6 md:px-20 py-20">

        {/* Logo + About */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <img
            src="/images/logoo.png"
            alt="Back2U"
            className="h-[90px] w-auto mb-6"
          />

          <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
            AI-powered lost & found platform for university campuses.
            Never lose anything again. <span className="text-white font-medium">Free. Trusted. Fast.</span>
          </p>

          <div className="flex items-center mt-6 space-x-5">
            <AiFillFacebook
              size={22}
              className="cursor-pointer text-gray-400 hover:text-blue-500 transition duration-300 hover:scale-110"
            />
            <AiOutlineTwitter
              size={22}
              className="cursor-pointer text-gray-400 hover:text-sky-400 transition duration-300 hover:scale-110"
            />
            <AiFillInstagram
              size={22}
              className="cursor-pointer text-gray-400 hover:text-pink-500 transition duration-300 hover:scale-110"
            />
            <AiFillYoutube
              size={22}
              className="cursor-pointer text-gray-400 hover:text-red-500 transition duration-300 hover:scale-110"
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
              Terms
            </Link>
            <span>•</span>
            <Link to="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
          </div>

          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt="Payment methods"
            className="h-[22px] opacity-80"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;


/*
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
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
      
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:px-8 px-5 py-16 sm:text-center">
       
        <div className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src="/images/logoo.png"
            alt="Back2U"
            className="h-[100px] w-[150px] mb-4"
          />
          <p className="text-sm leading-relaxed text-gray-600">
            AI-powered lost & found platform for university campuses. Never lose
            anything again.Free. Trusted. Fast.
          </p>
          <div className="flex items-center mt-4 space-x-4">
            <AiFillFacebook
              size={25}
              className="cursor-pointer text-gray-500 hover:text-blue-600 transition"
            />
            <AiOutlineTwitter
              size={25}
              className="cursor-pointer text-gray-500 hover:text-sky-500 transition"
            />
            <AiFillInstagram
              size={25}
              className="cursor-pointer text-gray-500 hover:text-pink-500 transition"
            />
            <AiFillYoutube
              size={25}
              className="cursor-pointer text-gray-500 hover:text-red-500 transition"
            />
          </div>
        </div>

        
        <ul className="text-center sm:text-start">
          <h1 className="mb-3 font-semibold text-gray-800">PLATFORM</h1>
          {footercompanyLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                className="text-gray-500 hover:text-teal-500 duration-300 text-sm leading-6"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

  

        <ul className="text-center sm:text-start">
          <h1 className="mb-3 font-semibold text-gray-800">Support</h1>
          {footerSupportLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link}
                className="text-gray-500 hover:text-teal-500 duration-300 text-sm leading-6"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

      
        <ul className="text-center sm:text-start">
          <h1 className="mb-3 font-semibold text-gray-800">CONTACT</h1>
          {footerProductLinks.map((link) => {
    const Icon = link.icon;
    return (
      <li key={link.name} className="flex items-center justify-center sm:justify-start gap-2">
        <Icon className="text-teal-500" size={18} />
        <Link
          to={link.link}
          className="text-gray-500 hover:text-teal-500 duration-300 text-sm leading-6"
        >
          {link.name}
        </Link>
      </li>
    );
  })}
        </ul>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center text-gray-500 text-sm border-t border-gray-200 pt-6 pb-8">
        <span>© 2026 Back2U. All rights reserved.</span>
        <span className="space-x-1">
          <Link to="#">Terms</Link>
          <span>·</span>
          <Link to="#">Privacy Policy</Link>
        </span>
        <div className="flex items-center justify-center">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt="Payment methods"
            className="h-[25px]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
*/
