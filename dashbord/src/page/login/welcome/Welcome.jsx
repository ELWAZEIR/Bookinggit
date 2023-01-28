import React from "react";

const Welcome = (props) => {
  return (
    <div className="col-lg-6 d-none d-lg-block  text-center text-white">
      <h1 className=" my-3"> ITI Booking Dashboard</h1>

      <h4 className="">{props.texting}</h4>
    </div>
  );
};

export default Welcome;
