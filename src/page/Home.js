import React from "react";
import Banner from "../components/Banner";
import FilmList from "../components/Film/FilmList";
import Contact from "../components/Contact/Contact";
import VideoPlay from "../components/VideoPlay";
import Entertainment from "../components/Entertainment/Entertainment";

const Home = ({ entertanData }) => {
  return (
    <>
      <Banner />
      <FilmList />
      <Contact />
      <VideoPlay />
      <Entertainment entertanData={entertanData} />
    </>
  );
};

export default Home;
