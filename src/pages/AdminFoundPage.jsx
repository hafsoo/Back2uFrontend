import React from 'react';
import AdminSideBar from '../components/Admin/Layout/AdminSideBar';
import AdminHeader from '../components/Layout/AdminHeader';
import AllFound from '../components/Admin/AllFound';

const AdminFoundPage = () => {
    return (
        <div>
      <AdminHeader/>
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] lg:w-[330px] flex-shrink-0">
            <AdminSideBar active={5} />
          </div>
          <AllFound className="flex-1 transition-all duration-300"/>
        </div>
      </div>
    </div>
    );
};

export default AdminFoundPage;