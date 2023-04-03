import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../../BoookingModal/BookingModal";

const AvailableAppointment = ({ selected }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(selected);
  return (
    <div className="flex flex-col items-center">
      <p
        className="my-10  text-secondary
       font-bold"
      >
        Available Appointment on {format(selected, "PP")}
      </p>
      <div className="grid gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <AppointmentOption
            key={service.id}
            service={service}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal selected={selected} treatment={treatment}></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
