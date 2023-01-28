import React from "react";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <div className="col-lg-6 d-none d-lg-block text-white">
      <h1 className=" my-3">Welcome to ITI Booking</h1>
      <p className="col-10  my-4">
        We all will miss iti and all instructors and we hope that we were good
        students and hope that we all getting better in our careers
      </p>
      <h4 className="">{props.texting}</h4>
      <h6>
        {props.questioning}
        <Link to={props.link} style={{ color: "yellow" }}>
          <span>
            {" "}
            {props.answering} {">>"}
          </span>
        </Link>{" "}
      </h6>
    </div>
  );
};

export default Welcome;
