import React from "react";
import { useNavigate } from "react-router-dom";

export const PropertyItem = (props) => {
  const navigate = useNavigate();
  const itemType = props.item.type;
  const handleNavigate = () => {
    navigate("/all", { state: { itemType } });
  };
  return (
    <div className="col-12 col-sm-6 col-lg-3 my-1">
      <img
        title="Click For Details"
        src={props.img}
        alt=""
        className="propertyImg  img-fluid w-100 rounded"
        style={{ height: "250px", cursor: "pointer" }}
        onClick={handleNavigate}
      />
      <div className="text-center text-md-start py-3">
        <h4 className="propertyTitle ">
          <span className="text-capitalize">{props.item.type}s</span>
        </h4>
        <span className="text-secondary text-capitalize">
          {props.item.count} {props.item.type}{" "}
        </span>
      </div>
    </div>
  );
};
