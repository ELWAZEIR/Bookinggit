import React from "react";

const HeaderTitle = (props) => {
  return (
    <div className="container-fluid container-md p-0 text-white">
      <h1 className="fs-1 fw-bold mt-5 mb-1 ">{props.title}</h1>
      <p className="fs-4 mt-3 mb-5">{props.desc}</p>
    </div>
  );
};

export default HeaderTitle;
