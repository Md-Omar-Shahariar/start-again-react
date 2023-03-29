import React, { useState } from "react";
import chair from "../../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = ({ selected, setSelected }) => {
  console.log(selected);
  return (
    <header>
      <div className="hero ">
        <div className="hero-content   flex-col lg:flex-row-reverse">
          <img alt="" src={chair} className="w-1/2 rounded-lg shadow-2xl" />
          <div>
            <DayPicker
              node="single"
              selected={selected}
              onDayClick={setSelected}
            />
            <p>You have selected date {format(selected, "PP")}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
