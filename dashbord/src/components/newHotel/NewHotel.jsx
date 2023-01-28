import axios from "axios";
import React, { useState } from "react";
import Navber from "../../components/navber/Navber";
import Sideber from "../../components/sideber/Sideber";

export default function NewHotel() {
  const testPhotos = [
    "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  ];
  const [info, setInfo] = useState({});
  const [HotelIsCreated, setHotelIsCreated] = useState(false);
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    console.log(info);
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const newHotel = { ...info };
      const res = await axios.post("http://localhost:9000/api/hotels", {
        ...newHotel,
        photos: testPhotos,
      });
      if (res.status === 200) {
        setHotelIsCreated(true);
        setTimeout(() => {
          setHotelIsCreated(false);
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
          <div className=" container">
            <div className="my-3 fs-3">Add new hotel</div>
            <div className="row">
              <div className="col-sm-9  p-2 ">
                <form onSubmit={handleClick} className="  m-auto row">
                  <div className="mb-2 col-md-5 mx-1">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="mb-2 col-md-5 mx-1">
                    <label htmlFor="title" className="form-label">
                      Title
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
                    <label htmlFor="description" className="form-label">
                      Description
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
                    <label htmlFor="cheapestPrice" className="form-label">
                      Price
                    </label>
                    <input
                      onChange={handleChange}
                      type="number"
                      className="form-control"
                      id="cheapestPrice"
                      name="cheapestPrice"
                      required
                    />
                  </div>

                  <div className="mb-2 col-md-5 mx-1">
                    <label htmlFor="type" className="form-label">
                      Type
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="type"
                      name="type"
                      required
                    />
                  </div>

                  <div className="mb-2 col-md-5 mx-1">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      required
                    />
                  </div>
                  <div className="mb-2 col-md-5 mx-1">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control text-lowercase"
                      id="city"
                      name="city"
                      required
                    />
                  </div>
                  <div className="mb-2 col-md-5 mx-1">
                    <label htmlFor="distance" className="form-label">
                      Distance
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="distance"
                      name="distance"
                      required
                    />
                  </div>
                  <p className="">
                    Photos added automatically because we don't have cloud
                    account
                  </p>

                  <div>
                    <button className="btn btn-secondary mt-2  px-5  ">
                      Add
                    </button>
                  </div>
                  {HotelIsCreated && (
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
