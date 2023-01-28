import axios from "axios";
import React, { useContext, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import { SearchContext } from "../../../../context/SearchContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reservation.css";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Loader from "../../../../components/loader/Loader";

const Reservation = ({ setOpen, hotelId }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:9000/api/hotels/room/${hotelId}`
  );
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { date } = useContext(SearchContext);

  const handleSelectRoom = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    let listDates = [];
    while (date <= end) {
      listDates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return listDates;
  };

  const allDates = getDatesInRange(date[0].startDate, date[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((datee) => {
      return allDates.includes(new Date(datee).getTime());
    });
    return !isFound;
  };

  const handleReserve = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(
            `http://localhost:9000/api/rooms/availability/${roomId}`,
            { dates: allDates }
          );
          return res.data;
        })
      );
      setOpen(false);
    } catch (err) {}
  };

  return (
    <div className="reservation">
      <div className="container justify-content-center rounded bg-white position-relative w-75 h-75 overflow-scroll">
        <FontAwesomeIcon
          color="black"
          icon={faX}
          onClick={() => {
            setOpen(false);
          }}
          className="close iti-text-color"
        />
        <div className="my-3 mx-2">
          <span className="fs-3">Select your rooms :</span>
        </div>
        {loading && <Loader />}
        {data.length === 0 && (
          <>
            <div className="d-flex justify-content-center">
              Sorry No Rooms Available For Now
            </div>
          </>
        )}
        {data.map((item) => {
          return (
            <div className="row border border-3 m-3 rounded">
              <div className="d-flex justify-content-between fw-bold fs-5">
                {" "}
                {item.title}
              </div>

              <div
                className="p-1 bg-success text-white mx-2 rounded"
                style={{ maxWidth: "max-content" }}
              >
                max people : {item.maxPeople}
              </div>
              <div className="text-success py-2" style={{ fontSize: "16px" }}>
                {item.description}
              </div>

              <div className="my-1">
                <h6>Rooms :</h6>
                {item.roomNumbers.map((roomNumber) => {
                  return (
                    <div>
                      <label htmlFor="" className="fs-5 fw-bold pe-3">
                        Room {roomNumber.number}
                      </label>
                      <input
                        type="checkbox"
                        value={roomNumber._id}
                        onChange={handleSelectRoom}
                        disabled={!isAvailable(roomNumber)}
                      />
                      {/* CHECK ROOM IF NOT AVAILABLE WE SHOW THIS DIV */}
                      {!isAvailable(roomNumber) && (
                        <>
                          <span className="mx-2 text-danger fw-bold">
                            Room Is Taken
                          </span>
                        </>
                      )}

                      {/* CHECK ROOM IF NOT AVAILABLE WE SHOW THIS DIV */}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {!loading && data.length !== 0 ? (
          <div className="d-flex justify-content-center pb-2">
            <button
              className="btn iti-bg-color text-white px-5"
              onClick={handleReserve}
            >
              Reserve Now
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Reservation;
