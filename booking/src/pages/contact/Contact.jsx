import React, { useContext, useState } from "react";
import Joi from "joi";
import ShowMsg from "../../components/ShowMessage/ShowMsg";
import { Navbar } from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import { AuthContext } from "../../context/AuthContext";
const Contact = () => {
  const [openMsg, setOpenMsg] = useState(false);
  const [errorList, setErrorList] = useState([]);
  const { user: userFromLocal } = useContext(AuthContext);
  const handelOpen = () => {
    setOpenMsg(false);
  };

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    hotel_name: "",
    room_number: 0,
    message: "",
  });

  function getUser(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  const handleMsg = () => {
    let validationResult = validateForm(user);

    if (validationResult.error) {
      setErrorList(validationResult.error.details);
    } else {
      setOpenMsg(true);
      localStorage.setItem("users", JSON.stringify(user));
      setErrorList([]);
    }
  };

  function submitForm(e) {
    e.preventDefault();
    localStorage.setItem("users", JSON.stringify(user));
  }

  function validateForm(user) {
    let schema = Joi.object({
      first_name: Joi.string().alphanum().min(3).max(20).required(),
      last_name: Joi.string().min(3).max(20).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      hotel_name: Joi.string().min(1).max(50).required(),
      room_number: Joi.number().min(1).max(1500).required(),
      message: Joi.string().min(7).max(3000),
    });

    return schema.validate(user, { abortEarly: false });
  }

  return (
    <>
      <Navbar />
      <Header />
      {openMsg && <ShowMsg click={handelOpen} />}
      <div class="container mt-4">
        <div class="card">
          <div class="card-header">
            <h1> ITI Booking Help Center</h1>
            <p>Contact With Customer Service, we're available 24 hours a day</p>
          </div>
          <div class="row col-12">
            <div class="card-body col-6">
              <i class="fa-solid fa-comments"></i>
              <h5 class="card-title">Send us a message</h5>
              <p class="card-text">
                Contact our agents about your booking, and we'll reply as soon
                as possible.
              </p>
            </div>
            <div class="card-body col-6">
              <i class="fa-solid fa-phone"></i>
              <h5 class="card-title">Call us</h5>
              <p class="card-text">
                For anything urgent, you can call us 24/7 on a local or
                international phone number.
              </p>
            </div>
          </div>
          {!userFromLocal && (
            <button class="btn btn-primary d-grid gap-2 col-6 mx-auto">
              Sign In
            </button>
          )}
        </div>

        <h2 className="my-3">Please Fill This Form To Help :</h2>

        <form className="py-4" onSubmit={submitForm}>
          <label htmlFor="first_name">First Name : </label>
          <input
            type="text"
            onChange={getUser}
            className="form-control form-control-lg my-3"
            name="first_name"
            id="first_name"
          />

          {errorList.map((error, index) =>
            error.path[0] === "first_name" ? (
              <div key={index} className=" text-danger form-text">
                {error.message}
              </div>
            ) : (
              ""
            )
          )}

          <label htmlFor="last_name">Last Name : </label>
          <input
            type="text"
            onChange={getUser}
            className="form-control form-control-lg my-3"
            name="last_name"
            id="last_name"
          />

          {errorList.map((error, index) =>
            error.path[0] === "last_name" ? (
              <div key={index} className=" text-danger form-text">
                {error.message}
              </div>
            ) : (
              ""
            )
          )}

          <label htmlFor="email">Email : </label>
          <input
            type="email"
            onChange={getUser}
            className="form-control form-control-lg my-3"
            name="email"
            id="email"
          />

          {errorList.map((error, index) =>
            error.path[0] === "email" ? (
              <div key={index} className=" text-danger form-text">
                {error.message}
              </div>
            ) : (
              ""
            )
          )}

          <label htmlFor="hotel_name">Hotel Name : </label>
          <input
            type="text"
            onChange={getUser}
            className="form-control form-control-lg my-3"
            name="hotel_name"
            id="hotel_name"
          />

          {errorList.map((error, index) =>
            error.path[0] === "hotel_name" ? (
              <div key={index} className=" text-danger form-text">
                {error.message}
              </div>
            ) : (
              ""
            )
          )}

          <label htmlFor="room_number">Room Number : </label>
          <input
            type="number"
            onChange={getUser}
            className="form-control form-control-lg my-3"
            name="room_number"
            id="room_number"
          />

          {errorList.map((error, index) =>
            error.path[0] === "room_number" ? (
              <div key={index} className=" text-danger form-text">
                {error.message}
              </div>
            ) : (
              ""
            )
          )}

          <div class="mb-3 ">
            <label class="form-label" for="message">
              Message
            </label>
            <textarea
              class="form-control"
              onChange={getUser}
              placeholder="Enter message here..."
              rows="4"
              name="message"
              id="message"
              required=""
            ></textarea>
          </div>

          {errorList.map((error, index) =>
            error.path[0] === "message" ? (
              <div key={index} className=" text-danger form-text">
                {error.message}
              </div>
            ) : (
              ""
            )
          )}

          <button
            onClick={handleMsg}
            className="btn btn-outline-primary btn-lg"
          >
            Send Message{" "}
          </button>
        </form>
      </div>
    </>
  );
};
export default Contact;
