import React from "react";
import treatment from "../../../assets/images/treatment.png"
import Button from "../../shared/button/Button";

const Banner2 = () => {
  return (
    <div className="hero px-20 min-h-screen relative ">
      <div className="hero-content h-full gap-x-10 flex-col lg:flex-row">
        <img
          src={treatment} alt=""
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button> Getting Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
