import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import LostFoundDetails from "../components/Route/ReportDetailPage/LostFoundDetails";
import { useSelector } from "react-redux";
import axios from "axios";

import {server} from "../server"
const LostFoundDetailPage = () => {
  const { lostItems } = useSelector((state) => state.lostItem);
  const { foundItems } = useSelector((state) => state.foundItem);
  const { id } = useParams();

  const [data, setData] = useState(null);

 useEffect(() => {
  const loadItem = async () => {
    if (!id) return;

    // 1️⃣ Try Redux first
    const reduxItem =
      lostItems.find((i) => i._id === id) ||
      foundItems.find((i) => i._id === id);

    if (reduxItem) {
      setData(reduxItem);
      return;
    }

    // 2️⃣ If not in Redux, fetch from backend
    try {
      const lostRes = await axios.get(`${server}/lost/lost-item/${id}`);
      if (lostRes.data?.item) {
        setData(lostRes.data.item);
        return;
      }
    } catch (err) {}

    try {
      const foundRes = await axios.get(`${server}/found/found-item/${id}`);
      if (foundRes.data?.item) {
        setData(foundRes.data.item);
        return;
      }
    } catch (err) {}

    setData(null);
  };

  loadItem();
}, [lostItems, foundItems, id]);

  return (
    <div>
      <Header />
      {data ? (
        <LostFoundDetails data={data} />
      ) : (
        <p className="text-center mt-20">Loading...</p>
      )}
      <Footer />
    </div>
  );
};

export default LostFoundDetailPage;
