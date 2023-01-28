import React from "react";
import "./homeItem.css";
export const HomeItem = (props) => {
  return (
    <div className=" text-center  text-md-start col-12 col-sm-6 col-md-3 col-lg-3 my-3">
      <div className="home-item">
        <img
          src={props.img}
          alt=""
          className=" img-fluid w-100 cursor-pointer rounded"
          style={{ height: "230px" }}
          onClick={props.click}
        />
      </div>
      <div className=" ">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column justify-content-around">
            <span
              className="d-block pt-2 text-start  fw-bold cursor-pointer iti-text-color "
              onClick={props.click}
            >
              {props.title}
            </span>
            <span className="text-secondary d-block text-start text-capitalize">
              {props.place}
            </span>
            <div className="d-flex align-items-center">
              <div className="iti-bg-color p-2 rounded text-white">
                {props.rateNumb}
              </div>
              <div className="d-inline-block">
                <div className="d-flex flex-column">
                  <span className="ms-1">{props.rate}</span>
                  <span className="ms-1 text-secondary">
                    {props.reviews} Review
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column text-center align-items-end justify-content-between">
            <h6 className=" mt-2 fw-bold " style={{ fontSize: "18px" }}>
              {props.price}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
