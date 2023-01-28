import React from "react";

const Item = (props) => {
  return (
    <>
      <div className="col-12 col-md-6 my-2  ">
        <div className="row mx-2 p-4 rounded shadow-sm bg-white">
          <div className="col-4 d-none d-md-block">
            <img src={props.photo} alt="" className="img-fluid w-75" />
          </div>
          <div className="col-12 col-md-8">
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
      {/* <div className="mx-1">
        <div className=" col-lg-5 bg-white col-md-12 col-sm-12 my-3 rounded ">
          <img
            src={props.photo}
            alt=""
            className="col-lg-6 col-md-6 col-sm-12"
          />
          <div className="col-lg-6 col-md-6 col-sm-12 px-3">
            <h4 className="fw-bold">{props.title}</h4>
            <p className="text-secondary" style={{ fontSize: "14px" }}>
              {props.desc}
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Item;
