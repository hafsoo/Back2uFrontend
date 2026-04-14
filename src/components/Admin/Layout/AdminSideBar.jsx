import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineAssignment } from "react-icons/md";

const AdminSideBar = ({ active }) => {
  // Use a common class for items to keep code clean
  const itemClass = "w-full flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors";

  return (
    <div className="fixed top-0 left-0 h-screen w-[80px] lg:w-[330px] bg-white dark:bg-[#111827] shadow-sm border-r border-gray-200 dark:border-gray-800 z-20 overflow-y-auto pt-24">
      
      {/* Dashboard */}
      <div className={itemClass}>
        <Link to="/admin/dashboard" className="w-full flex items-center">
          <RxDashboard
            size={30}
            className={active === 1 ? "text-[crimson]" : "text-[#555] dark:text-gray-400"}
          />
          <h5 className={`lg:block hidden pl-3 text-[18px] font-[500] ${
              active === 1 ? "text-[crimson]" : "text-[#555] dark:text-gray-300"
            }`}>
            Dashboard
          </h5>
        </Link>
      </div>

      {/* All Lost Reports */}
      <div className={itemClass}>
        <Link to="/admin-all-lost" className="w-full flex items-center">
          <FiShoppingBag
            size={30}
            className={active === 2 ? "text-[crimson]" : "text-[#555] dark:text-gray-400"}
          />
          <h5 className={`lg:block hidden pl-3 text-[18px] font-[500] ${
              active === 2 ? "text-[crimson]" : "text-[#555] dark:text-gray-300"
            }`}>
            All Lost Reports
          </h5>
        </Link>
      </div>

      {/* All Users */}
      <div className={itemClass}>
        <Link to="/admin-users" className="w-full flex items-center">
          <HiOutlineUserGroup
            size={30}
            className={active === 4 ? "text-[crimson]" : "text-[#555] dark:text-gray-400"}
          />
          <h5 className={`lg:block hidden pl-3 text-[18px] font-[500] ${
              active === 4 ? "text-[crimson]" : "text-[#555] dark:text-gray-300"
            }`}>
            All Users
          </h5>
        </Link>
      </div>

      {/* All Found Reports */}
      <div className={itemClass}>
        <Link to="/admin-all-founds" className="w-full flex items-center">
          <BsHandbag
            size={30}
            className={active === 5 ? "text-[crimson]" : "text-[#555] dark:text-gray-400"}
          />
          <h5 className={`lg:block hidden pl-3 text-[18px] font-[500] ${
              active === 5 ? "text-[crimson]" : "text-[#555] dark:text-gray-300"
            }`}>
            All Found Reports
          </h5>
        </Link>
      </div>

      {/* All Claims */}
      <div className={itemClass}>
        <Link to="/admin-claims" className="w-full flex items-center">
          <MdOutlineAssignment
            size={30}
            className={active === 6 ? "text-[crimson]" : "text-[#555] dark:text-gray-400"}
          />
          <h5 className={`lg:block hidden pl-3 text-[18px] font-[500] ${
              active === 6 ? "text-[crimson]" : "text-[#555] dark:text-gray-300"
            }`}>
            All Claims
          </h5>
        </Link>
      </div>

      {/* Settings */}
      <div className={itemClass}>
        <Link to="/profile" className="w-full flex items-center">
          <AiOutlineSetting
            size={30}
            className={active === 8 ? "text-[crimson]" : "text-[#555] dark:text-gray-400"}
          />
          <h5 className={`lg:block hidden pl-3 text-[18px] font-[500] ${
              active === 8 ? "text-[crimson]" : "text-[#555] dark:text-gray-300"
            }`}>
            Settings
          </h5>
        </Link>
      </div>

    </div>
  );
};

export default AdminSideBar;

/* import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";

const AdminSideBar = ({ active }) => {
  return (
    <div 
    
    className="w-full min-h-screen bg-white dark:bg-[#111827] shadow-sm overflow-y-auto sticky top-0 left-0 z-10 border-r border-gray-200 dark:border-gray-800 transition-colors duration-300"
    //className="w-full h-[90vh] bg-white  dark:bg-gray-800  shadow-sm overflow-y-scroll sticky top-0 left-0 z-10"
    >
    
      <div className="w-full flex items-center p-4">
        <Link to="/admin/dashboard" className="w-full flex items-center">
          <RxDashboard
            size={30}
            color={`${active === 1 ? "crimson" : "#555"}`}
          />
          <h5
            className={`md:block hidden pl-2 text-[18px] font-[400] ${
              active === 1 ? "text-[crimson]" : "text-[#555] dark:text-gray-300"
            }`}
          >
            Dashboard
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-all-lost" className="w-full flex items-center">
          <FiShoppingBag
            size={30}
            color={`${active === 2 ? "crimson" : "#555"}`}
          />
          <h5
            className={`md:block hidden pl-2 text-[18px] font-[400] ${
              active === 2 ? "text-[crimson]" : "text-[#555] dark:text-gray-300"
            }`}
          >
            All Lost Reports
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-users" className="w-full flex items-center">
          <HiOutlineUserGroup
            size={30}
            color={`${active === 4 ? "crimson" : "#555"}`}
          />
          <h5
            className={`md:block hidden pl-2 text-[18px] font-[400] ${
              active === 4 ? "text-[crimson]" : "text-[#555] dark:text-gray-300"
            }`}
          >
            All Users
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-all-founds" className="w-full flex items-center">
          <BsHandbag
            size={30}
            color={`${active === 5 ? "crimson" : "#555"}`}
          />
          <h5
            className={`md:block hidden pl-2 text-[18px] font-[400] ${
              active === 5 ? "text-[crimson]" : "text-[#555] dark:text-gray-300"
            }`}
          >
            All Found Reports
          </h5>
        </Link>
      </div>

       <div className="w-full flex items-center p-4">
        <Link to="/admin-claims" className="w-full flex items-center">
          <BsHandbag
            size={30}
            color={`${active === 6 ? "crimson" : "#555"}`}
          />
          <h5
            className={`md:block hidden pl-2 text-[18px] font-[400] ${
              active === 6 ? "text-[crimson]" : "text-[#555] dark:text-gray-300"
            }`}
          >
            All Claims
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/profile"
          className="w-full flex items-center"
        >
          <AiOutlineSetting
            size={30}
            color={`${active === 8 ? "crimson" : "#555"}`}
          />
          <h5
            className={`md:block hidden pl-2 text-[18px] font-[400] ${
              active === 8 ? "text-[crimson]" : "text-[#555] dark:text-gray-300"
            }`}
          >
            Settings
          </h5>
        </Link>
      </div>

    </div>
  );
};

export default AdminSideBar;
*/
