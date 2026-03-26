import React from 'react';
import AdminHeader from '../components/Layout/AdminHeader';
import AdminSideBar from '../components/Admin/Layout/AdminSideBar';
import AllUsers from '../components/Admin/AllUsers';

const AdminUsersPage = () => {
    return (
        <div>
      <AdminHeader/>
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] lg:w-[330px] flex-shrink-0">
            <AdminSideBar active={4} />
          </div>
          <AllUsers className="flex-1 transition-all duration-300"/>
        </div>
      </div>
    </div>
    );
};

export default AdminUsersPage;