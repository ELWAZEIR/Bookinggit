import React from "react";
import "./featured-item.css";
export const FeaturedItem = (props) => {
  return (
    <div
      className=" col-12 my-2 col-sm-6 position-relative"
      style={{ height: 250 }}
    >
      <img
        src={props.img}
        alt=""
        className=" rounded w-100 img-fluid h-100 position-relative"
        style={{ height: "250px" }}
      />

      <div className="  position-absolute top-0 ms-1 mt-3">
        <div className="  p-2 text-white mx-3">
          <h2 className="text-capitalize fs-2">{props.title}</h2>
          <span className="fs-5 text-white rounded bg-dark px-2 opacity-75">
            {props.count} Stays
          </span>
        </div>
      </div>
    </div>
  );
};
