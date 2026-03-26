/*
import React, { useEffect, useState } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { MdReportProblem } from "react-icons/md";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { server } from "../../server";
import { TrendingUp, PackageSearch } from "lucide-react";

const AdminDashboardMain = () => {
  const [lostReports, setLostReports] = useState([]);
  const [foundReports, setFoundReports] = useState([]);
  const [latestReports, setLatestReports] = useState([]);

  const [dashboardCards, setDashboardCards] = useState({
  monthlyReports: { lostMonthly: [], foundMonthly: [] },
});
 const monthNames = [
    "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
  ];
useEffect(() => {
  const fetchDashboardCards = async () => {
    try {
      const { data } = await axios.get(`${server}/statistics/dashboard-cards`, {
        withCredentials: true,
      });
      setDashboardCards(data.cards);
    } catch (error) {
      console.error("Error fetching dashboard cards:", error);
    }
  };

  fetchDashboardCards();
}, []);


  // ================= FETCH DATA =================
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const { data: lostData } = await axios.get(
          `${server}/lost/admin-all-lost-items`,
          { withCredentials: true }
        );

        const { data: foundData } = await axios.get(
          `${server}/found/admin-all-found-items`,
          { withCredentials: true }
        );

        setLostReports(lostData.lostItems || []);
        setFoundReports(foundData.foundItems || []);

        const combined = [
          ...(lostData.lostItems || []).map((i) => ({
            ...i,
            reportType: "Lost",
          })),
          ...(foundData.foundItems || []).map((i) => ({
            ...i,
            reportType: "Found",
          })),
        ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setLatestReports(combined.slice(0, 5));
      } catch (error) {
        console.error("Admin dashboard error:", error);
      }
    };

    fetchReports();
  }, []);

  // ================= DATAGRID =================
  const columns = [
    {
      field: "id",
      headerName: "Report ID",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "itemName",
      headerName: "Item",
      minWidth: 150,
      flex: 0.8,
    },
    {
      field: "reportType",
      headerName: "Type",
      minWidth: 120,
      flex: 0.6,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 120,
      flex: 0.6,
      cellClassName: (params) =>
        params.value === "claimed" ? "greenColor" : "redColor",
    },
    {
      field: "createdAt",
      headerName: "Date",
      minWidth: 150,
      flex: 0.7,
    },
  ];

  const rows = latestReports.map((item) => ({
    id: item._id,
    itemName: item.itemName,
    reportType: item.reportType,
    status: item.status,
    createdAt: item.createdAt?.slice(0, 10),
  }));

  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-800 p-6">
   
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
        Overview
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 mr-12
       ">
       
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Total Reports
              </p>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mt-2">
                {lostReports.length + foundReports.length}
              </h2>
            </div>
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
              <AiOutlineFileSearch size={26} className="text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Lost Reports
              </p>
              <h2 className="text-3xl font-bold text-gray-800  dark:text-white mt-2">
                {lostReports.length}
              </h2>
              <Link
                to="/admin-all-lost"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline mt-3 inline-block"
              >
                View Reports →
              </Link>
            </div>
            <div className="p-3 rounded-full bg-red-100 dark:bg-red-900/30">
              <MdReportProblem size={26} className="text-red-600 dark:text-red-400" />
            </div>
          </div>
        </div>

     
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Found Reports
              </p>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mt-2">
                {foundReports.length}
              </h2>
              <Link
                to="/admin-all-founds"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline mt-3 inline-block"
              >
                View Reports →
              </Link>
            </div>
            <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30">
              <AiOutlineFileSearch size={26} className="text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>
      </div>
      
    <div className="flex items-center justify-between mb-5 mr-12">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-2">
          Monthly Item Reports
        </h3>
      </div>
      <TrendingUp className="text-blue-500" size={28} />
    </div>

    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
     
      <div>
        <div className="flex items-center gap-2 mb-4">
          <PackageSearch className="text-red-500" size={20} />
          <h4 className="text-sm font-semibold text-red-600 uppercase tracking-wide">
            Lost Items
          </h4>
        </div>

        <div className="flex flex-wrap gap-2">
          {dashboardCards.monthlyReports.lostMonthly.map((m, i) => (
            <span
              key={i}
              className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs px-3 py-1 rounded-full border border-red-200 dark:border-red-800"
            >
              {monthNames[m._id - 1]} : {m.count}
            </span>
          ))}
        </div>
      </div>

    
      <div>
        <div className="flex items-center gap-2 mb-4">
          <PackageSearch className="text-green-500" size={20} />
          <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wide">
            Found Items
          </h4>
        </div>

        <div className="flex flex-wrap gap-2">
          {dashboardCards.monthlyReports.foundMonthly.map((m, i) => (
            <span
              key={i}
              className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs px-3 py-1 rounded-full border border-green-200 dark:border-green-800"
            >
              {monthNames[m._id - 1]} : {m.count}
            </span>
          ))}
        </div>
      </div>

    </div>

      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 mt-3">
        Latest Reports
      </h3>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border dark:border-gray-700">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          autoHeight
          disableSelectionOnClick
          sx={{
            border: "none",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f9fafb",
              //dark: { backgroundColor: "rgba(255,255,255,0.05)" },
              fontWeight: "600",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#f3f4f6",

            },
          }}
        />
      </div>
    </div>
  );
};

export default AdminDashboardMain;
*/
import React, { useEffect, useState } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { MdReportProblem } from "react-icons/md";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { server } from "../../server";
import { TrendingUp, PackageSearch } from "lucide-react";

const AdminDashboardMain = () => {
  const [lostReports, setLostReports] = useState([]);
  const [foundReports, setFoundReports] = useState([]);
  const [latestReports, setLatestReports] = useState([]);

  const [dashboardCards, setDashboardCards] = useState({
    monthlyReports: { lostMonthly: [], foundMonthly: [] },
  });

  const monthNames = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  // ================= FETCH DASHBOARD STATS =================
  useEffect(() => {
    const fetchDashboardCards = async () => {
      try {
        const { data } = await axios.get(
          `${server}/statistics/dashboard-cards`,
          { withCredentials: true }
        );
        setDashboardCards(data.cards);
      } catch (error) {
        console.error("Error fetching dashboard cards:", error);
      }
    };

    fetchDashboardCards();
  }, []);

  // ================= FETCH REPORTS =================
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const { data: lostData } = await axios.get(
          `${server}/lost/admin-all-lost-items`,
          { withCredentials: true }
        );

        const { data: foundData } = await axios.get(
          `${server}/found/admin-all-found-items`,
          { withCredentials: true }
        );

        setLostReports(lostData.lostItems || []);
        setFoundReports(foundData.foundItems || []);

        const combined = [
          ...(lostData.lostItems || []).map((i) => ({
            ...i,
            reportType: "Lost",
          })),
          ...(foundData.foundItems || []).map((i) => ({
            ...i,
            reportType: "Found",
          })),
        ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setLatestReports(combined.slice(0, 5));
      } catch (error) {
        console.error("Admin dashboard error:", error);
      }
    };

    fetchReports();
  }, []);

  // ================= DATAGRID =================
  const columns = [
    {
      field: "id",
      headerName: "Report ID",
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <span>{params.value.slice(0, 8)}...</span>
      ),
    },
    {
      field: "itemName",
      headerName: "Item",
      flex: 0.8,
      minWidth: 120,
    },
    {
      field: "reportType",
      headerName: "Type",
      flex: 0.6,
      minWidth: 100,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.6,
      minWidth: 100,
      cellClassName: (params) =>
        params.value === "claimed" ? "greenColor" : "redColor",
    },
    {
      field: "createdAt",
      headerName: "Date",
      flex: 0.7,
      minWidth: 120,
    },
  ];

  const rows = latestReports.map((item) => ({
    id: item._id,
    itemName: item.itemName,
    reportType: item.reportType,
    status: item.status,
    createdAt: item.createdAt?.slice(0, 10),
  }));

  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-800 p-3 sm:p-4 md:p-6">
      
      {/* ================= OVERVIEW ================= */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-6">
        Overview
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
        
        {/* TOTAL */}
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition p-4 sm:p-5 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase">
                Total Reports
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mt-2">
                {lostReports.length + foundReports.length}
              </h2>
            </div>
            <div className="p-2 sm:p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
              <AiOutlineFileSearch size={22} />
            </div>
          </div>
        </div>

        {/* LOST */}
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition p-4 sm:p-5 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase">
                Lost Reports
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mt-2">
                {lostReports.length}
              </h2>
              <Link to="/admin-all-lost" className="text-xs sm:text-sm text-blue-600 hover:underline mt-2 inline-block">
                View Reports →
              </Link>
            </div>
            <div className="p-2 sm:p-3 rounded-full bg-red-100 dark:bg-red-900/30">
              <MdReportProblem size={22} />
            </div>
          </div>
        </div>

        {/* FOUND */}
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition p-4 sm:p-5 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase">
                Found Reports
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mt-2">
                {foundReports.length}
              </h2>
              <Link to="/admin-all-founds" className="text-xs sm:text-sm text-blue-600 hover:underline mt-2 inline-block">
                View Reports →
              </Link>
            </div>
            <div className="p-2 sm:p-3 rounded-full bg-green-100 dark:bg-green-900/30">
              <AiOutlineFileSearch size={22} />
            </div>
          </div>
        </div>
      </div>

      {/* ================= MONTHLY ================= */}
      <div 
      className="flex items-center justify-between mb-6 gap-2"
      //className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 gap-2"
      >
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
          Monthly Item Reports
        </h3>
        <div
         className="flex-shrink-0 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30">
<TrendingUp size={24} className="text-blue-600 dark:text-blue-400" />
        </div>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">

        {/* LOST */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <PackageSearch className="text-red-500" size={18} />
            <h4 className="text-xs sm:text-sm font-semibold text-red-600 uppercase">
              Lost Items
            </h4>
          </div>

          <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
            {dashboardCards.monthlyReports.lostMonthly.map((m, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full border">
                {monthNames[m._id - 1]} : {m.count}
              </span>
            ))}
          </div>
        </div>

        {/* FOUND */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <PackageSearch className="text-green-500" size={18} />
            <h4 className="text-xs sm:text-sm font-semibold text-green-600 uppercase">
              Found Items
            </h4>
          </div>

          <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
            {dashboardCards.monthlyReports.foundMonthly.map((m, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full border">
                {monthNames[m._id - 1]} : {m.count}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ================= LATEST ================= */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-4">
        Latest Reports
      </h3>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-2 sm:p-4 border dark:border-gray-700 overflow-x-auto">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          autoHeight
          disableSelectionOnClick
          sx={{
            border: "none",
            fontSize: "12px",
            "@media (min-width:640px)": {
              fontSize: "14px",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f9fafb",
              fontWeight: "600",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#f3f4f6",
            },
          }}
        />
      </div>
    </div>
  );
};

export default AdminDashboardMain;
