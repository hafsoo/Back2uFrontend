
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { server } from "../../server";

const AllFound = () => {
  const [isDark, setIsDark] = useState(
      document.documentElement.classList.contains("dark"),
    );
    useEffect(() => {
      const observer = new MutationObserver(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
      });
  
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
  
      return () => observer.disconnect();
    }, []);

  const [foundReports, setFoundReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoundReports = async () => {
      try {
        const { data } = await axios.get(
          `${server}/found/admin-all-found-items`,
          { withCredentials: true }
        );

        setFoundReports(data.foundItems || []);
      } catch (error) {
        console.error("Error fetching found reports:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoundReports();
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "Report ID",
      minWidth: 220,
      flex: 1,
    },
    {
      field: "itemName",
      headerName: "Item Name",
      minWidth: 160,
      flex: 0.8,
    },
    {
      field: "category",
      headerName: "Category",
      minWidth: 140,
      flex: 0.6,
    },
    {
      field: "location",
      headerName: "Location",
      minWidth: 160,
      flex: 0.8,
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
      headerName: "Reported On",
      minWidth: 150,
      flex: 0.7,
    },
  ];

  const rows = foundReports.map((item) => ({
    id: item._id,
    itemName: item.itemName,
    category: item.category || "—",
    location: item.location,
    status: item.status,
    createdAt: item.createdAt?.slice(0, 10),
  }));

  return (
    <div className="w-full p-6 bg-gray-100  dark:bg-gray-800  min-h-screen">
      <h2 className="text-2xl  dark:text-white font-semibold text-gray-800 mb-6">
        All Found Reports
      </h2>

      <div className="bg-white dark:bg-gray-800  rounded-xl shadow-sm p-4">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 50]}
          autoHeight
          loading={loading}
          disableSelectionOnClick
          sx={{
            border: "none",

            //  MAIN HEADER CONTAINER
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: isDark ? "#334155" : "#f9fafb",
              color: isDark ? "#fff" : "#000",
            },

            // INNER HEADER FIX 
            "& .MuiDataGrid-columnHeadersInner": {
              backgroundColor: isDark ? "#334155" : "#f9fafb",
            },

            // EACH HEADER CELL 
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: isDark ? "#334155" : "#f9fafb",
              color: isDark ? "#fff" : "#000",
            },

            // HEADER TEXT
            "& .MuiDataGrid-columnHeaderTitle": {
              color: isDark ? "#fff" : "#000",
              fontWeight: "600",
            },

            //  ROWS
            "& .MuiDataGrid-row": {
              backgroundColor: isDark ? "#1e293b" : "#fff",
              color: isDark ? "#e2e8f0" : "#111827",
            },

            // ✅ CELL BORDER
            "& .MuiDataGrid-cell": {
              borderBottom: isDark ? "1px solid #334155" : "1px solid #e5e7eb",
            },

            // ✅ HOVER
            "& .MuiDataGrid-row:hover": {
              backgroundColor: isDark ? "#334155" : "#f3f4f6",
            },

            // ✅ FOOTER
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: isDark ? "#1e293b" : "#fff",
              color: isDark ? "#fff" : "#000",
            },
          }}
        />
      </div>
    </div>
  );
};

export default AllFound;


