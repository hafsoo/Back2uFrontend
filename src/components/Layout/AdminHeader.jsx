/*import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const AdminHeader = () => {
    const {user} = useSelector((state) => state.user);

  return (
         <div 
         className="w-full h-[80px] sm:h-[100px] bg-white shadow sticky top-0 left-0 z-30 flex flex-wrap sm:flex-nowrap items-center justify-between px-4"
         //className="w-full h-[100px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4"
         >
      <div>
        <Link to="/">
          <img
            src="/images/logoo.png"
            alt=""
            className='h-[60px] sm:h-[100px] w-auto'
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
            <img
              src={`${user?.avatar?.url}`}
              alt=""
              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full object-cover"
              //className="w-[50px] h-[50px] rounded-full object-cover"
            />
        </div>
      </div>
    </div>
  )
}

export default AdminHeader
*/

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  const { user } = useSelector((state) => state.user);

  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Toggle dark/light mode
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="w-full h-[65px] sm:h-[80px] bg-white/70 dark:bg-gray-900 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30 flex items-center justify-between px-3 sm:px-4">

      {/* Left: Hamburger Menu / Logo */}
      <div className="flex items-center gap-2">
      
        {/* Logo */}
        <Link to="/">
          <img
            src="/images/logoo.png"
            alt="Logo"
            className="h-[40px] sm:h-[60px] w-auto"
          />
        </Link>
      </div>

      {/* Center: Page Title */}
      <h2 className="text-sm sm:text-2xl font-semibold text-gray-800 dark:text-white">
       Admin Dashboard
      </h2>

      {/* Right: Dark Mode Toggle or Avatar */}
      <div className="flex items-center gap-3">

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 active:scale-95 transition"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          )}
        </button>

        {/* User Avatar (Optional) */}
        {user?.avatar?.url && (
          <img
            src={user.avatar.url}
            alt="Profile"
            className="w-[36px] h-[36px] sm:w-[45px] sm:h-[45px] rounded-full object-cover border-2 border-blue-500 cursor-pointer active:scale-95 transition"
          />
        )}

      </div>
    </div>
  );
};

export default AdminHeader;