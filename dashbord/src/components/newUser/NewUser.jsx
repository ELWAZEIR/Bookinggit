import React, { useState } from "react";
import Navber from "../../components/navber/Navber";
import Sideber from "../../components/sideber/Sideber";
import axios from "axios";
export default function NewUser() {
  // const [imgFile, setImgFile] = useState("");
  const [isUserCreated, setIsUserCreated] = useState(false);
  const [info, setInfo] = useState({});
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const newUser = { ...info };
      const res = await axios.post(
        "http://localhost:9000/api/auth/register",
        newUser
      );
      if (res.status === 200) {
        setIsUserCreated(true);
        setTimeout(() => {
          setIsUserCreated(false);
        }, 2000);
      } else {
        console.log(res);
      }

      console.log(res.status);
    } catch (err) {}
  };

  return (
    <div>
      <div className="d-flex">
        <div className=" col-2 ">
          <Sideber />
        </div>
        <div className="main col-10">
          <Navber />
          <div className=" container   newUser">
            <div className=" text-muted fs-3">Add new user</div>
            <div className="row my-4">
              <div className="col-sm-9  p-2 ">
                <form onSubmit={handleClick} className="  m-auto row">
                  <div className="mb-2 col-md-5 mx-1">
                    <label htmlFor="username" className="form-label">
                      username
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      required
                    />
                  </div>
                  <div className="mb-2 col-md-5 mx-1">
                    <label htmlFor="img" className="form-label">
                      Image Url
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="img"
                      name="img"
                      required
                    />
                  </div>

                  <div className="mb-2 col-md-5 mx-1">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      onChange={handleChange}
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="mb-2 col-md-5 mx-1">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      onChange={handleChange}
                      type="number"
                      className="form-control"
                      id="phone"
                      name="phone"
                      required
                    />
                  </div>

                  <div className="mb-2 col-md-5 mx-1">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="country"
                      name="country"
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
                      className="form-control"
                      id="city"
                      name="city"
                      required
                    />
                  </div>
                  <div className="mb-2 col-md-5 mx-1">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      onChange={handleChange}
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      required
                    />
                  </div>

                  <div>
                    <button className="btn btn-outline-secondary  px-3  ">
                      Add
                    </button>
                    {isUserCreated && (
                      <div className="p-2 bg-success rounded text-white w-25">
                        Added Successfully
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
