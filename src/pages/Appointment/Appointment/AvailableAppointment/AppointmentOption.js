import React from "react";
import Button from "../../../shared/button/Button";

const AppointmentOption = ({ service }) => {
  console.log(service);
  const { name, slots } = service;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title text-primary text-2xl mx-auto">{name}</h2>
        <p>{slots?.length > 0 ? slots[0] : "No Slot Available"}</p>
        <p className="font-bold">
          {slots?.length}
          {slots.length > 1 ? " Spaces" : " Space"} Available
        </p>
        <div className="card-actions justify-center">
          <Button>Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
