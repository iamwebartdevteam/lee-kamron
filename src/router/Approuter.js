import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as API from "../api/Index";
const Approuter = () => {
  const [newsData, setNewsData] = useState([]);
  const [entertanData, setEntertanDat] = useState([]);
  const allpagedata = async () => {
    try {
      const newsres = await API.newsall();
      const entertantres = await API.entertainmentAll();
      console.log("entertantres", entertantres);
      setEntertanDat(entertantres.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    allpagedata();
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home entertanData={entertanData} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Approuter;
