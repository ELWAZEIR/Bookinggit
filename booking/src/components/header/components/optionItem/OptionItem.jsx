import React from "react";

const OptionItem = (props) => {
  return (
    <div className="optionItem">
      <span className="optionText">{props.name}</span>
      <div className="optionCounter">
        <button
          disabled={props.disabled}
          className="optionCounterBtn"
          onClick={props.clickMinus}
        >
          -
        </button>
        <span className="optionCounterNumber">{props.counterName}</span>
        <button className="optionCounterBtn" onClick={props.clickAdd}>
          +
        </button>
      </div>
    </div>
  );
};

export default OptionItem;
