import { format } from "date-fns";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { DateRange } from "react-date-range";
import DatePicker from "../../../../components/header/components/datePicker/DatePicker";
import OptionItem from "../../../../components/header/components/optionItem/OptionItem";
import { SearchContext } from "../../../../context/SearchContext";
import useFetch from "../../../../hooks/useFetch";

//have some issues dont use it for now
const SearchSmallScreen = (props) => {
  const { city, date, options, dispatch } = useContext(SearchContext);

  const [chosenDate, setChosenDate] = useState(date);
  const [chosenOptions, setChosenOptions] = useState(options);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [updateDataView, setUpdateDataView] = useState(false);

  const handleOption = (name, operation) => {
    setChosenOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "i" ? chosenOptions[name] + 1 : chosenOptions[name] - 1,
      };
    });
  };
  return (
    <>
      <div className="d-flex flex-column justify-content-center rounded border border-2 border-warning shadow-sm mt-2 d-md-none">
        <div className="row bg-white rounded">
          <div className=" col-4 d-flex flex-column p-2 my-2 rounded">
            <span className="mx-2">City</span>
            <input
              type="text"
              defaultValue={city}
              className="border border-2 border-warning text-secondary rounded"
              onChange={(e) => {
                let input = e.target.value.toLowerCase();
                props.handleDestination(input);
              }}
            />
          </div>

          <div className="col-5  p-2 my-2 rounded">
            <div className="row">
              <div className="col-6">
                <div className="d-flex flex-column">
                  <span className="">Min Price</span>
                  <input
                    type="number"
                    placeholder="0"
                    min={0}
                    max={999}
                    onChange={(e) => props.handleMinPrice(e.target.value)}
                    className="border border-2 border-warning rounded"
                    style={{ width: "70px" }}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-column">
                  <span className="">Max Price</span>
                  <input
                    type="number"
                    placeholder="0"
                    min={0}
                    max={999}
                    onChange={(e) => props.handleMaxPrice(e.target.value)}
                    className="border border-2 border-warning rounded"
                    style={{ width: "70px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 my-2  rounded p-2">
            <div className=" position-relative   d-flex flex-column">
              <span className="mx-2">Date</span>
              <div className="border border-2 rounded border-warning">
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
              </div>

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
          </div>
          <div className="col-6 d-flex flex-column  p-2 my-2 rounded">
            <span className="mx-2">Options</span>
            <div className="listOptions rounded bg-white p-1 border border-2 border-warning  position-relative ">
              <span
                className=" "
                role="button"
                style={{ fontSize: "12px" }}
                onClick={() => {
                  if (openDatePicker) {
                    setOpenDatePicker(false);
                    setOpenOptions(!openOptions);
                  } else {
                    setOpenOptions(!openOptions);
                  }
                }}
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
          </div>

          <div className="col-12 m-0 p-0">
            <div className="">
              <button
                className="btn iti-bg-color text-white w-100 rounded-1"
                onClick={props.handleSearch}
              >
                {updateDataView && (
                  <>
                    <div
                      className="spinner-border"
                      style={{ width: "1rem", height: "1rem" }}
                      role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </>
                )}{" "}
                {!updateDataView && "Update"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchSmallScreen;
