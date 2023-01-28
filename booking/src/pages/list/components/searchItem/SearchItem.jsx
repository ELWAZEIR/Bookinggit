import React from "react";

import { Link } from "react-router-dom";

import "./searchItem.css";
export const SearchItem = ({ item }) => {
  return (
    <div
      className="container rounded bg-dark mt-2  border border-1 p-0"
      style={{
        backgroundImage: `url(${item.photos[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="rounded" style={{ background: "rgba(0, 0, 0, 0.7)" }}>
        <div className="row justify-content-center  text-white">
          <div className="d-flex col-7 flex-column mx-2  pt-2">
            <div className="">
              <h3 className="fs-4">{item.name}</h3>
            </div>
            <span>{item.distance}</span>
            <div
              className="rounded border-2 bg-success p-1 my-2 text-white"
              style={{ maxWidth: "max-content" }}
            >
              Free Taxi From Airport
            </div>
            <p className="py-2 w-100" style={{ fontSize: "14px" }}>
              {item.description}
            </p>
          </div>
          <div className="col-4 d-flex flex-column justify-content-between text-end">
            <div className="mt-2">
              <span className="fw-bold fs-3">
                {item.cheapestPrice}${" "}
                <span
                  className="text-white fw-lighter"
                  style={{ fontSize: "14px" }}
                >
                  / Per Day
                </span>
              </span>
            </div>
            <Link to={`/hotels/${item._id}`}>
              <div className="mb-3 ">
                <button className="btn iti-bg-color fw-md-bold px-md-3 px-lg-5 fs-5 text-white">
                  Check Now
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
