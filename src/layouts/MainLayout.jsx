import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import "../styles/utiles.css";

const MainLayout = () => {
  return (
    <div className="main">
      <Navbar />
      <Banner />
    </div>
  );
};

export default MainLayout;
