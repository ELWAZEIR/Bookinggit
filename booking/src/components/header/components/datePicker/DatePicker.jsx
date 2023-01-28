import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const DatePicker = (props) => {
  return (
    <div className="bg-white p-1 rounded">
      <FontAwesomeIcon icon={faCalendar} className="px-1" />
      <span role="button" onClick={props.click} style={{ fontSize: "12px" }}>
        {props.dateName}
      </span>
    </div>
  );
};

export default DatePicker;
