import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as API from "../api/Index";
import Entertaint from "../page/entertament/Entertaint";
import EntertantDetails from "../page/entertament/EntertantDetails";
import News from "../page/News/News";
import NewDetails from "../page/News/NewDetails";
import ArchiveList from "../page/archive/ArchiveList";
import Awards from "../page/award/Awards";
import Press from "../page/press/Press";
import ContactUs from "../page/contact/ContactUs";

const Approuter = () => {
  const [newsData, setNewsData] = useState([]);
  const [entertanData, setEntertanDat] = useState([]);
  const [archiveData, setArchiveData] = useState([]);
  const [awardData, setAwardData] = useState([]);
  const [pressData, setPressData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const allpagedata = async () => {
    try {
      const newsres = await API.newsall();
      setNewsData(newsres.data.data);
      const entertantres = await API.entertainmentAll();
      setEntertanDat(entertantres.data.data);
      const archiveres = await API.archiveAll();
      setArchiveData(archiveres.data.data);
      const awardres = await API.awardsAll();
      setAwardData(awardres.data.data);
      const pressres = await API.pressAll();
      setPressData(pressres.data.data);
      const contactres = await API.contactInfo();
      setContactData(contactres.data.data);
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
          <Route
            path="/entertainment"
            element={<Entertaint entertanData={entertanData} />}
          />
          <Route
            path="/entertainment-details/:slug"
            element={<EntertantDetails entertanData={entertanData} />}
          />
          <Route path="/news" element={<News newsData={newsData} />} />
          <Route
            path="/news-details/:slug"
            element={<NewDetails newsData={newsData} />}
          />
          <Route
            path="/archive"
            element={<ArchiveList archiveData={archiveData} />}
          />
          <Route path="/awards" element={<Awards awardData={awardData} />} />
          <Route path="/press" element={<Press pressData={pressData} />} />
          <Route
            path="/contact-us"
            element={<ContactUs contactData={contactData} />}
          />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default Approuter;
