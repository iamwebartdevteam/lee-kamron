import React from "react";
import Banner from "../components/Banner";
import FilmList from "../components/Film/FilmList";
import Contact from "../components/Contact/Contact";
import VideoPlay from "../components/VideoPlay";
import Entertainment from "../components/Entertainment/Entertainment";

const Home = () => {
  return (
    <>
      <Banner />
      <FilmList />
      <Contact />
      <VideoPlay />
      <Entertainment />
    </>
  );
};

export default Home;
