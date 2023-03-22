import React from "react";
import Banner from "../Banner/Banner";
import chair from "../../../assets/images/chair.png";

const Home = () => {
  return (
    <div className=" max-h-[700px] w-full ">
      <div className="relative h-full">
        <img
          src={chair}
          alt=""
          className="absolute  opacity-25 w-full h-full  "
        ></img>
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
