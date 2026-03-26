/* import React from "react";
import AdminHeader from "../components/Layout/AdminHeader";
import AdminSideBar from "../components/Admin/Layout/AdminSideBar";
import AdminDashboardMain from "../components/Admin/AdminDashboardMain";

const AdminDashboardPage = () => {
  return (
    <div>
      <AdminHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] lg:w-[400px]">
            <AdminSideBar active={1} />
          </div>
          <AdminDashboardMain />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
*/

import React from "react";
import AdminHeader from "../components/Layout/AdminHeader";
import AdminSideBar from "../components/Admin/Layout/AdminSideBar";
import AdminDashboardMain from "../components/Admin/AdminDashboardMain";

const AdminDashboardPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a]">
      <AdminHeader />
      <div className="flex w-full">
        {/* Sidebar Container: Width must match the margin of the main content */}
        <div className="w-[80px] lg:w-[330px] flex-shrink-0">
          <AdminSideBar active={1} />
        </div>
        
        {/* Main Content: We use flex-1 to take up remaining space */}
        <div className="flex-1 transition-all duration-300">
          <AdminDashboardMain />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;