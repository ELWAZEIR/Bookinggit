import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./listItem.css";

const ListItem = (props) => {
  return (
    <Link to={props.linkTo}>
      <div className="rounded">
        <button className=" btn btn-overlay-light py-3 text-white listItem fs-5 me-4">
          <FontAwesomeIcon icon={props.iconName} />
          <span className="fw-bold"> {props.name}</span>
        </button>
      </div>
    </Link>
  );
};

export default ListItem;
