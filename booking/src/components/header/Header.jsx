import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faContactBook,
  faDigitalTachograph,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import ListItem from "./components/headerListItem/HeaderListItem";
import Destination from "./components/destination/Destination";
import DatePicker from "./components/datePicker/DatePicker";
import OptionItem from "./components/optionItem/OptionItem";
import HeaderTitle from "./components/headerTitle/HeaderTitle";
import { useNavigate } from "react-router-dom";
import "./header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { SearchContext } from "../../context/SearchContext";

export const Header = (props) => {
  const { city, date, options, dispatch } = useContext(SearchContext);
  const navigate = useNavigate();
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [chosenDate, setChosenDate] = useState(date);
  const [chosenOptions, setChosenOptions] = useState(options);
  const [destination, setDestination] = useState(city);

  const handleOption = (name, operation) => {
    setChosenOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "i" ? chosenOptions[name] + 1 : chosenOptions[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    dispatch({
      type: "NEW_SEARCH",
      payload: { destination, chosenDate, chosenOptions },
    });

    navigate("/hotels");
  };

  ///////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  return (
    <div className="iti-bg-color position-relative">
      <div className="container-fluid container-md">
        {/* ----HEADER LIST ITEMS */}
        <nav className="navbar navbar-expand-md py-1 navbar-light">
          <div className="container-fluid p-0">
            <div className=" navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <ListItem iconName={faBed} name="Stays" linkTo="/" />
                </li>
                <li className="nav-item">
                  <ListItem
                    iconName={faContactBook}
                    name="Contact Us"
                    linkTo="/contact"
                  />
                </li>
                <li className="nav-item">
                  <ListItem
                    iconName={faDigitalTachograph}
                    name="About Us"
                    linkTo="/about"
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* ----HEADER LIST ITEMS */}

        {props.type === "home" && (
          <>
            {/* =======HEADER TITLE---- */}
            <HeaderTitle
              title="Find your next stay"
              desc="Search deals on hotels, homes, and much more..."
            />
            {/* =======HEADER TITLE----- */}

            <div className="container-fluid container-md bg-warning px-3">
              <div className="row">
                {/* -------DESTINATION */}

                <div className="col-12 col-lg-3 p-0 bg-white my-1">
                  <Destination
                    change={(e) => {
                      let input = e.target.value.toLowerCase();
                      setDestination(input);
                    }}
                  />
                </div>

                {/* -------DESTINATION */}

                {/* -------DATE PICKER */}
                <div className=" col-12 col-lg-3 py-2 mb-1 mt-md-1  bg-white text-secondary position-relative">
                  <DatePicker
                    click={() => {
                      if (openOptions) {
                        setOpenOptions(false);
                        setOpenDatePicker(!openDatePicker);
                      } else {
                        setOpenDatePicker(!openDatePicker);
                      }
                    }}
                    dateName={`${format(
                      chosenDate[0].startDate,
                      "MM/dd/yyyy"
                    )} | ${format(chosenDate[0].endDate, "MM/dd/yyyy")}`}
                  />
                  {openDatePicker && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setChosenDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={chosenDate}
                      className="homeDatePicker"
                      minDate={new Date()}
                    />
                  )}
                </div>
                {/* -----DATE PICKER */}
                <div className="col-12 col-lg-3 py-3 mb-1 mt-md-1 bg-white text-secondary position-relative  ">
                  <FontAwesomeIcon icon={faPerson} className="" />
                  <span
                    className="headerSearchText"
                    onClick={() => {
                      if (openDatePicker) {
                        setOpenDatePicker(false);
                        setOpenOptions(!openOptions);
                      } else {
                        setOpenOptions(!openOptions);
                      }
                    }}
                    style={{ fontSize: "12px" }}
                  >
                    {`${chosenOptions.adult} adult . ${chosenOptions.children} children . ${chosenOptions.room} room`}
                  </span>
                  {openOptions && (
                    <div className="options">
                      <OptionItem
                        name="Adult"
                        disabled={chosenOptions.adult <= 1}
                        clickMinus={() => handleOption("adult", "d")}
                        counterName={chosenOptions.adult}
                        clickAdd={() => handleOption("adult", "i")}
                      />
                      <OptionItem
                        name="Children"
                        disabled={chosenOptions.children <= 0}
                        clickMinus={() => handleOption("children", "d")}
                        counterName={chosenOptions.children}
                        clickAdd={() => handleOption("children", "i")}
                      />
                      <OptionItem
                        name="Room"
                        disabled={chosenOptions.room <= 1}
                        clickMinus={() => handleOption("room", "d")}
                        counterName={chosenOptions.room}
                        clickAdd={() => handleOption("room", "i")}
                      />
                    </div>
                  )}
                </div>

                <>
                  <div className=" mb-1 mt-md-1 px-0 col-12 col-lg-3">
                    <button
                      className="btn btn-primary w-100 h-100 headerBtn rounded-0  opacity-100"
                      onClick={handleSearch}
                      disabled={!destination}
                      id="btn"
                    >
                      {!destination ? (
                        <>
                          <span className="text-secondary fs-4">Search</span>
                        </>
                      ) : (
                        <>
                          <span className="text-white fs-4">Search</span>
                        </>
                      )}
                    </button>
                  </div>
                </>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
