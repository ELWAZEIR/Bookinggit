import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { SearchContext } from "../../../../context/SearchContext";

const Destination = (props) => {
  const { city } = useContext(SearchContext);
  return (
    <div className="my-2 py-2 bg-white d-flex align-items-center  ">
      <FontAwesomeIcon icon={faCar} className=" px-2 text-secondary" />
      <input
        type="text"
        placeholder="which city are you going?"
        className="border-0 headerSearchInput text-capitalize w-100"
        onChange={props.change}
        style={{ fontSize: "12px" }}
        defaultValue={city}
      />
    </div>
  );
};

export default Destination;
