
/*
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


      <div className="flex items-center gap-2">
      
    
        <Link to="/">
          <img
            src="/images/logoo.png"
            alt="Logo"
            className="h-[40px] sm:h-[60px] w-auto"
          />
        </Link>
      </div>

    
      <h2 className="text-sm sm:text-2xl font-semibold text-gray-800 dark:text-white">
       Admin Dashboard
      </h2>

      
      <div className="flex items-center gap-3">

     
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
*/
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Sun, Moon} from "lucide-react";
//import { Link } from "react-router-dom";

const AdminHeader = () => {
  const { user } = useSelector((state) => state.user);
  const [darkMode, setDarkMode] = useState(false);
  ;

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

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
    <div className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30 shadow-sm">
      
      {/* ── Main Header Row ── */}
      <div className="flex items-center justify-between px-4 sm:px-6 h-[65px] sm:h-[75px]">

        {/* ── LEFT: Title + Breadcrumb ── */}
        <div className="flex flex-col justify-center">
          <h2 className="text-base sm:text-xl font-bold text-[#0f2a4a] dark:text-white leading-tight">
            Admin Dashboard
          </h2>
          <p className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 mt-0.5 hidden sm:block">
            Home &rsaquo; Dashboard &rsaquo; Overview
          </p>
        </div>

        {/* ── RIGHT: Actions ── */}
        <div className="flex items-center gap-1 sm:gap-2">


          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95 transition"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-200" />
            )}
          </button>

          {/* Divider */}
          <div className="w-px h-8 bg-gray-200 dark:bg-gray-700 mx-1 hidden sm:block" />

          {/* Avatar + Name */}
          {user?.avatar?.url && (
            <div className="flex items-center gap-2 cursor-pointer group">
              <img
                src={user.avatar.url}
                alt="Profile"
                className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] rounded-full object-cover border-2 border-[#1a7a6e] group-hover:border-[#22c5b0] active:scale-95 transition"
              />
              <div className="hidden lg:flex flex-col">
                <span className="text-xs font-semibold text-[#0f2a4a] dark:text-white leading-tight">
                  {user?.name || "Admin"}
                </span>
                <span className="text-[10px] text-gray-400">Super Admin</span>
              </div>
            </div>
          )}

        </div>
      </div>


      

    </div>
  );
};

export default AdminHeader;