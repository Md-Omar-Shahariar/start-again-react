import React from "react";
import Banner from "../Banner/Banner";
import chair from "../../../assets/images/chair.png";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import Banner2 from "../Banner/Banner2";

const Home = () => {
  return (
    <div className="  w-full ">
      <div className="relative h-screen flex">
        <img
          src={chair}
          alt=""
          className="absolute  opacity-5 w-full h-full  "
        ></img>
        <Banner></Banner>
      </div>
        <InfoCards></InfoCards>
        <Services></Services>
        
        <Banner2></Banner2>
        
     
    </div>
  );
};

export default Home;
