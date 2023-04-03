import React from "react";

const AppointmentOption = ({ service, setTreatment }) => {
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
          <label
            disabled={slots.length < 1}
            onClick={() => setTreatment(service)}
            htmlFor="booking-modal"
            className="btn btn-secondary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
