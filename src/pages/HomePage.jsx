import React from "react";
import Header from "../components/Layout/Header.jsx";
import Hero from "../components/Route/Hero/Hero.jsx";
import Footer from "../components/Layout/Footer.jsx";
import FeaturesSection from "../components/Route/FeaturesSection/FeaturesSection.jsx";
import Working from "../components/Route/HowWorks/Working.jsx";
import StatsSection from "../components/StatsSection/StatsSection.jsx";
import { useSelector } from "react-redux";
import Loader from "../components/Layout/Loader.jsx";


const HomePage = () => {
  const { loading } = useSelector((state) => state.user);
  
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={1} />
          <Hero />
          <br />
          <br />
          <StatsSection />
          <br />
          <br />
          <FeaturesSection />
          <br />
          <Working />
          <Footer />
        </div>
      )}
    </>
  );
};

export default HomePage;
