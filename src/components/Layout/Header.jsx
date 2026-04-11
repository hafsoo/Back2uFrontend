import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "fixed top-0 left-0 right-0 z-50 bg-[#0b1c2c] shadow-md"
            : "relative bg-[#0b1c2c]"
        }`}
      >
        {/* ================= MOBILE ================= */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 text-white bg-gradient-to-b from-[#020617] to-[#020617]">
          <button onClick={() => setOpen(true)}>
            <BiMenuAltLeft size={28} />
          </button>

           <Link to="/" className="flex items-center gap-1">
    <div className="w-[38px] h-[38px] rounded-[10px] border border-cyan-400/40 flex items-center justify-center overflow-hidden">
      <img
        src="/images/my.png"
        alt="Back2U Logo"
        className="w-full h-full object-contain scale-110"
      />
    </div>
    <div className="flex flex-col leading-tight">
      <span className="text-sm font-extrabold text-white tracking-wide">
        BACK<span className="text-cyan-400">2U</span>
      </span>
      <span className="text-[7px] text-gray-400 tracking-[0.25em] uppercase">
        Lost &amp; Found
      </span>
    </div>
  </Link>

          {isAuthenticated ? (
            <Link to="/profile">
              {user?.avatar?.url ? (
                <img
                  src={user.avatar.url}
                   className="
                  w-9 h-9 rounded-full object-cover
                  border border-white/30
                  hover:ring-2 hover:ring-cyan-300
                  transition
                  "
                  alt="profile"
                />
              ) : (
                <div className="w-9 h-9 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
              )}
            </Link>
          ) : (
            <Link to="/login">
              <CgProfile size={26} />
            </Link>
          )}
        </div>

        {/* ================= DESKTOP ================= */}
        <div
          className="
          hidden lg:flex
          items-center justify-between
          px-16 h-[80px]
          bg-gradient-to-b from-[#020617] to-[#020617]
          text-white
        "
        >
         <Link to="/" className="group flex items-center gap-2">
  {/* Logo with thin cyan border */}
  <div className="w-[74px] h-[74px] rounded-[14px] border border-cyan-400/40 flex items-center justify-center transition-all duration-300 group-hover:border-cyan-400/70 overflow-hidden">
    <img
      src="/images/my.png"
      alt="Back2U Logo"
      className="w-full h-full object-contain scale-110"
    />
  </div>

  {/* Text */}
  <div className="flex flex-col leading-tight">
    <span className="text-2xl font-extrabold tracking-wide text-white">
      BACK
      <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
        2U
      </span>
    </span>
    <span className="text-[9px] text-gray-400 tracking-[0.35em] uppercase">
      Lost &amp; Found System
    </span>
  </div>
</Link>

          {/* CENTER: NAV LINKS */}
          <div className="flex items-center gap-10 text-sm">
            <Navbar active={activeHeading} />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-5">
            {/* Browse Button */}
            <Link
              to="/browse"
              className="
              bg-cyan-400
              text-black
              px-5 py-2
              rounded-xl
              font-semibold
              hover:bg-cyan-300
              transition
              flex items-center
              "
            >
              Browse Items <IoIosArrowForward className="ml-1" />
            </Link>

            {/* Profile / Login */}
            {isAuthenticated ? (
              <Link to="/profile">
                {user?.avatar?.url ? (
                  <img
                    src={user.avatar.url}
                    className="
                  w-9 h-9 rounded-full object-cover
                  border border-white/30
                  hover:ring-2 hover:ring-cyan-300
                  transition
                  "
                    alt="profile"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-2xl bg-blue-500 flex items-center justify-center text-white font-bold text-lg border-2 border-blue-500 hover:shadow-md hover:ring-4 hover:ring-blue-200 transition-all duration-300">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                )}
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-gray-300 hover:text-white text-sm transition"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ height: scrolled ? "70px" : "0px" }} />

      {/* ================= MOBILE SIDEBAR ================= */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          <div className="relative w-3/4 max-w-xs h-full bg-[#0b1c2c] text-white p-5">
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-semibold text-lg">Menu</h2>
              <button onClick={() => setOpen(false)}>
                <RxCross1 size={22} />
              </button>
            </div>

            <Navbar active={activeHeading} isMobile />

            <Link
              to="/browse"
              className="block mt-6 py-2 rounded-xl bg-cyan-400 text-black text-center font-semibold"
            >
              Browse Items
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

/*
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { server } from "../../server";

const Header = ({ activeHeading }) => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchTimeout = useRef(null);

  const TOP_HEADER_HEIGHT = 64;
  const NAV_HEIGHT = 70;
  const COMBINED_HEIGHT = TOP_HEADER_HEIGHT + NAV_HEIGHT;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (searchTimeout.current) clearTimeout(searchTimeout.current);

    searchTimeout.current = setTimeout(async () => {
      if (!term.trim()) {
        setSearchData([]);
        return;
      }
      try {
        const res = await fetch(
          `${server}/search?q=${encodeURIComponent(term)}`,
        );
        const data = await res.json();
        if (data.success) setSearchData(data.results);
      } catch (err) {
        console.error("Search error:", err);
      }
    }, 300);
  };

  const handleSelectItem = (id) => {
    navigate(`/lost-found/${id}`);
    setSearchTerm("");
    setSearchData([]);
  };

  return (
    <>
      
      <div
        className={`w-full transition-all duration-300 ease-in-out ${
          scrolled
            ? "fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-b border-gray-100"
            : "relative bg-white border-b border-transparent"
        }`}
      >
       
        <div className="lg:hidden flex items-center justify-between w-full px-4 py-3 relative">
          <button onClick={() => setOpen(true)}>
            <BiMenuAltLeft size={32} className="text-gray-700" />
          </button>

          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <img
              src="/images/logoo.png"
              alt="Back2U"
              className="h-[60px] w-[130px] object-contain"
            />
          </Link>

          {isAuthenticated ? (
            <Link to="/profile">
            
               {user?.avatar?.url ? (
    <img
      src={user.avatar.url}
      className="w-12 h-12 rounded-2xl border-2 border-blue-500 object-cover hover:shadow-md hover:ring-4 hover:ring-blue-200 transition-all duration-300"
      alt="profile"
    />
  ) : (
    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
  {user?.name?.charAt(0).toUpperCase()}
</div>
  )}
            </Link>
          ) : (
            <Link to="/login">
              <CgProfile size={30} className="text-gray-700" />
            </Link>
          )}
        </div>

    
        <div className="hidden lg:flex items-center justify-between px-16 py-4 h-[100px]">
          \
          <Link to="/">
            <img
              src="/images/logoo.png"
              alt="Back2U"
              className="h-[200px] w-[170px] object-contain transition duration-300 hover:scale-105 hover:opacity-90"
             
            />
          </Link>

        
          <div className="relative flex-1 mx-12 max-w-2xl">
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="
               h-12 w-full px-5 pr-12
               border border-gray-200
               rounded-2xl
              bg-white shadow-sm
              focus:shadow-md
               focus:ring-2 focus:ring-blue-[#1e3a5f]
             focus:border-[#1e3a5f]
               focus:outline-none
transition-all duration-300
text-gray-700
placeholder:text-gray-400
              "
            />
            <AiOutlineSearch
              size={22}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            {searchData.length > 0 && (
              <div
                className="
                  absolute left-0 right-0 z-50 mt-4
bg-white rounded-2xl
border border-gray-100
shadow-[0_20px_50px_rgba(0,0,0,0.08)]
max-h-80 overflow-auto p-3
backdrop-blur-xl
                "
              >
                {searchData.map((item) => (
                  <div
                    key={item._id}
                    onClick={() => handleSelectItem(item._id)}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-blue-50 transition cursor-pointer"
                  >
                    <img
                      src={
                        item.images?.[0]?.url || "/images/default-avatar.png"
                      }
                      className="w-10 h-10 rounded-md object-cover"
                      alt="item"
                    />
                    <div>
                      <p className="font-medium text-gray-800">
                        {item.itemName}
                      </p>
                      <p className="text-xs text-gray-500 capitalize">
                        {item.type} item
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        
          <div className="flex items-center gap-3">
            <Link
              to="/browse"
              className="px-6 py-3
bg-emerald-500 
text-white font-medium
rounded-2xl
shadow-lg shadow-green-500/20
hover:shadow-xl hover:shadow-green-500/30
transition-all duration-300
flex items-center"
            >
              Browse Items <IoIosArrowForward className="ml-1" />
            </Link>

            {isAuthenticated ? (
              <Link to="/profile">
                {user?.avatar?.url ? (
                  <img
                    src={user.avatar.url}
                    className="w-12 h-12 rounded-2xl border-2 border-blue-500 object-cover hover:shadow-md hover:ring-4 hover:ring-blue-200 transition-all duration-300"
                    alt="profile"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center text-white font-bold text-lg border-2 border-blue-500 hover:shadow-md hover:ring-4 hover:ring-blue-200 transition-all duration-300">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                )}
               
              </Link>
            ) : (
              <Link to="/login">
                <CgProfile size={32} className="text-gray-700" />
              </Link>
            )}
          </div>
        </div>

      
        <div
          
          className="hidden lg:block border-t  border-gray-100/70 backdrop-blur-sm bg-[#1e3a5f]"
        >
          <div className={`${styles.section} flex justify-center h-[70px]`}>
            <Navbar active={activeHeading} scrolled={scrolled} />
          </div>
        </div>
      </div>

     
      <div style={{ height: scrolled ? COMBINED_HEIGHT : 0 }} />

      
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-3/4 max-w-xs h-full bg-white p-5 shadow-lg">
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-semibold text-lg">Menu</h2>
              <button onClick={() => setOpen(false)}>
                <RxCross1 size={22} />
              </button>
            </div>

            <Navbar active={activeHeading} isMobile />

            <Link
              to="/browse"
              className="block mt-6 py-2 rounded-xl bg-blue-600 text-white text-center"
            >
              Browse Items
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
*/
