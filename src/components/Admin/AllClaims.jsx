/*
import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../server";
import { useNavigate } from "react-router-dom";

const statusStyle = {
  approved: "text-green-600 font-semibold",
  rejected: "text-red-500 font-semibold",
  pending: "text-yellow-500 font-semibold",
  awaiting_admin: "text-orange-500 font-semibold",
};

const AllClaims = () => {
  const [claims, setClaims] = useState([]);
  const navigate = useNavigate();

  const fetchClaims = async () => {
    const { data } = await axios.get(`${server}/claim/admin-all-claims`, {
      withCredentials: true,
    });
    setClaims(data.claims);
  };

  useEffect(() => {
    fetchClaims();
  }, []);

  return (
    <div className="w-full p-6 bg-gray-100  dark:bg-gray-800  min-h-screen">
      <h2 className="text-2xl  dark:text-white  font-semibold mb-6">
        All Claims
      </h2>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full  min-w-[700px] border-collapse">
          <thead>
            <tr className="text-left border-b bg-gray-50 text-sm">
              <th className="p-2 sm:p-4">Claim ID</th>
              <th className="p-2 sm:p-4">Item</th>
              <th className="p-2 sm:p-4">Claimant</th>
              <th className="p-2 sm:p-4">Item Type</th>
              <th className="p-2 sm:p-4">Status</th>
              <th className="p-2 sm:p-4">Actions</th>
              <th className="p-2 sm:p-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {claims.map((claim, i) => (
              <tr
                key={claim._id}
                className={`border-b text-sm sm:text-sm ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="p-4">{claim._id}</td>

                <td className="p-4">{claim.itemSnapshot?.itemName || "N/A"}</td>

                <td className="p-4">{claim.claimant?.name || "User"}</td>

                <td className="p-4">{claim.itemType}</td>

                <td className={`p-4 ${statusStyle[claim.status]}`}>
                  {claim.status.replace("_", " ")}
                </td>

                <td className="p-4">
                  <button
                    onClick={() => navigate(`/admin/claim/${claim._id}`)}
                    className="px-2 py-1 sm:px-3 sm:py-1 rounded text-white text-xs bg-blue-600 hover:bg-blue-700"
                  >
                    VIEW
                  </button>
                </td>

                <td className="p-4">{claim.createdAt?.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllClaims;
*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../server";
import { useNavigate } from "react-router-dom";

const statusStyle = {
  approved: "text-green-600 dark:text-green-400 font-semibold",
  rejected: "text-red-500 dark:text-red-400 font-semibold",
  pending: "text-yellow-500 dark:text-yellow-400 font-semibold",
  awaiting_admin: "text-orange-500 dark:text-orange-400 font-semibold",
};

const AllClaims = () => {
  const [claims, setClaims] = useState([]);
  const navigate = useNavigate();

  const fetchClaims = async () => {
    const { data } = await axios.get(
      `${server}/claim/admin-all-claims`,
      { withCredentials: true }
    );
    setClaims(data.claims);
  };

  useEffect(() => {
    fetchClaims();
  }, []);

  return (
    <div className="w-full p-6 bg-gray-100 dark:bg-[#0f172a] min-h-screen transition-colors duration-300">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
        All Claims
      </h2>

      <div className="bg-white dark:bg-[#1e293b] rounded-lg shadow-md overflow-x-auto border border-transparent dark:border-gray-700">
        <table className="w-full min-w-[700px] border-collapse">
          <thead>
            <tr className="text-left border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#334155] text-sm text-gray-600 dark:text-gray-200">
              <th className="p-4">Claim ID</th>
              <th className="p-4">Item</th>
              <th className="p-4">Claimant</th>
              <th className="p-4">Item Type</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Actions</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>

          <tbody className="text-gray-700 dark:text-gray-300">
            {claims.map((claim, i) => (
              <tr
                key={claim._id}
                className={`border-b border-gray-100 dark:border-gray-700 text-sm transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/30 ${
                  i % 2 === 0 ? "bg-white dark:bg-[#1e293b]" : "bg-gray-50/50 dark:bg-[#1e293b]/50"
                }`}
              >
                <td className="p-4 font-mono text-xs">{claim._id}</td>

                <td className="p-4">
                  {claim.itemSnapshot?.itemName || "N/A"}
                </td>

                <td className="p-4">
                  {claim.claimant?.name || "User"}
                </td>

                <td className="p-4">
                  <span className="capitalize">{claim.itemType}</span>
                </td>

                <td className={`p-4 ${statusStyle[claim.status]}`}>
                  {claim.status.replace("_", " ")}
                </td>

                <td className="p-4 text-center">
                  <button
                    onClick={() => navigate(`/admin/claim/${claim._id}`)}
                    className="px-4 py-1.5 rounded-md text-white text-xs font-medium bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-sm transition-all"
                  >
                    VIEW
                  </button>
                </td>

                <td className="p-4">
                  {claim.createdAt?.slice(0, 10)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllClaims;