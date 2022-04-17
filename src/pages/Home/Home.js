import React from "react";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div id="services">
        <Services></Services>
      </div>
    </div>
  );
};
export default Home;
