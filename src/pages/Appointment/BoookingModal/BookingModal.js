import { format } from "date-fns";
import React from "react";

const BookingModal = ({ selected, treatment }) => {
  const { name, slots } = treatment;
  console.log(name);
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;
    console.log(name, email, phone, slot);
    e.target.reset();
  };
  return (
    <React.Fragment>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center pb-3">{name}</h3>

          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
            <input
              name="date"
              type="text"
              disabled
              value={format(selected, "PP")}
              className="input input-bordered w-full "
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full "
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full "
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full "
            />
            <input
              className="w-full  btn btn-accent"
              type="submit"
              value="submit"
            ></input>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookingModal;
