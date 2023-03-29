import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";

const AvailableAppointment = ({ selected }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(selected);
  return (
    <div>
      <p
        className="my-10 text-center text-secondary
       font-bold"
      >
        Available Appointment on {format(selected, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {services.map((service) => (
          <AppointmentOption
            key={service.id}
            service={service}
          ></AppointmentOption>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointment;
