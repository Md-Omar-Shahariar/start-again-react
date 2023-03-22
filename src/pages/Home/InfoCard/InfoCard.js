import React from "react";

const InfoCard = ({card}) => {
    const {bgClass, name, description, icon} = card
  return (
    <div className={`text-white w-96 p-5 card card-side bg-base-100 shadow-xl ${bgClass}`}>
      <figure>
        <img
          src={icon}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        
      </div>
    </div>
  );
};

export default InfoCard;
