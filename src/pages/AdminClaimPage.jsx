import React from 'react';
import AdminHeader from '../components/Layout/AdminHeader';
import AdminSideBar from '../components/Admin/Layout/AdminSideBar';
import AllClaims from "../components/Admin/AllClaims"
const AdminClaimPage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0f172a]">
      <AdminHeader/>
      <div className="w-full flex">
        
          <div className="w-[80px] lg:w-[330px] flex-shrink-0">
            <AdminSideBar active={6} />
          </div>
          <div className="flex-1 transition-all duration-300 overflow-hidden" >
          <AllClaims  />
        </div>

      </div>
    </div>
    );
};

export default AdminClaimPage;