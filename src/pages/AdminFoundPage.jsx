import React from 'react';
import AdminSideBar from '../components/Admin/Layout/AdminSideBar';
import AdminHeader from '../components/Layout/AdminHeader';
import AllFound from '../components/Admin/AllFound';

const AdminFoundPage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0f172a]">
      <AdminHeader/>
      <div className="w-full flex">
        
          <div className="w-[80px] lg:w-[330px] flex-shrink-0">
            <AdminSideBar active={5} />
          </div>
          <div className="flex-1 transition-all duration-300 overflow-hidden">
          <AllFound />
        </div>
      </div>
    </div>
    );
};

export default AdminFoundPage;