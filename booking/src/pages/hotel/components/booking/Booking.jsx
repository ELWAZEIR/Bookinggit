import React from "react";

const Booking = (props) => {
  return (
    <>
      <div className="col-12 col-md-4 p-4 rounded ">
        <div className="shadow shadow-sm px-3 py-1 rounded">
          {props.days ? (
            <>
              <h5 className="text-success">
                Perfect for a <span>{props.days}</span> -night stay!
              </h5>
              <p>
                located in the real heart of krakow this property has excellent
                location
              </p>
            </>
          ) : (
            <>
              <div>
                <h5 className="">Please Select Date range</h5>
              </div>
            </>
          )}

          <div>
            <span className="text-success fw-bold">
              {props.price || 0} $ ({props.days || 0} nights){" "}
              {props.options.room || 0} Rooms
            </span>
          </div>
          <button
            disabled={!props.days}
            className="btn iti-bg-color text-white fw-bold p-2 my-3 w-100"
            onClick={props.handleBooking}
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Booking;
