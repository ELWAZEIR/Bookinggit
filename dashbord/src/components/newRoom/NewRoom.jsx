import axios from "axios";
import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Navber from "../navber/Navber";
import Sideber from "../sideber/Sideber";

export default function NewRoom() {
  const [info, setInfo] = useState({});
  const [RoomIsCreated, setRoomIsCreated] = useState(false);
  const { data, loading, error } = useFetch("http://localhost:9000/api/hotels");
  const [hotelid, setHotelId] = useState("");
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    console.log(info);
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const newRoom = {
        ...info,
        roomNumbers: [{ number: 100 }, { number: 200 }],
      };
      const res = await axios.post(
        `http://localhost:9000/api/rooms/${hotelid}`,
        newRoom
      );
      if (res.status === 200) {
        setRoomIsCreated(true);
        setTimeout(() => {
          setRoomIsCreated(false);
        }, 2000);
      } else {
        console.log(res);
      }

      console.log(res.status);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="d-flex">
        <div className=" col-2 ">
          <Sideber />
        </div>
        <div className="main col-10">
          <Navber />
          <div className=" container  newUser">
            <div className=" text-muted fs-3">Add new room</div>
            <div className="row">
              <div className="col-sm-9  p-2 ">
                <form onSubmit={handleClick} className=" m-auto row">
                  <div className="mb-2 col-md-5 mx-1">
                    <label htmlFor="title" className="form-label">
                      title
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      required
                    />
                  </div>
                  <div className="mb-2 col-md-5 mx-1">
                    <label htmlFor="title" className="form-label">
                      Choose Hotel
                    </label>
                    <select
                      className="p-1 border-secondary rounded"
                      name="hotelid"
                      id="hotelid"
                      onChange={(e) => {
                        setHotelId(e.target.value);
                      }}
                    >
                      {loading
                        ? "loading"
                        : data &&
                          data.map((item) => {
                            return (
                              <option value={item._id}>{item.name}</option>
                            );
                          })}
                    </select>
                  </div>

                  <div className="mb-2 col-md-5 mx-1">
                    <label htmlFor="description" className="form-label">
                      description
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      required
                    />
                  </div>
                  <div className="mb-2 col-md-5 mx-1">
                    <label htmlFor="price" className="form-label">
                      price
                    </label>
                    <input
                      onChange={handleChange}
                      type="number"
                      className="form-control"
                      id="price"
                      name="price"
                      required
                    />
                  </div>

                  <div className="mb-2 col-md-5 mx-1">
                    <label htmlFor="maxPeople" className="form-label">
                      Max People
                    </label>
                    <input
                      onChange={handleChange}
                      type="number"
                      className="form-control"
                      id="maxPeople"
                      name="maxPeople"
                      required
                    />
                  </div>

                  <div>
                    <button className="btn btn-outline-secondary  px-3  ">
                      Add
                    </button>
                  </div>
                  {RoomIsCreated && (
                    <div className="p-2 bg-success rounded my-2 text-white w-25">
                      Added Successfully
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
