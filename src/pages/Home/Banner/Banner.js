import React from "react";
import chair from "../../../assets/images/chair.png";
import "./Banner.css";
import Button from "../../shared/button/Button";

const Banner = () => {
  return (
    <div className="hero ">
      
      <div className="hero-content   flex-col lg:flex-row-reverse">
        <img alt="" src={chair} className="w-1/2 rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
