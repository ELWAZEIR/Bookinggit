// import './contac.css'
import "./showmsg.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

const ShowMsg = ({ click }) => {
  const [user, getUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    hotel_name: "",
    room_number: 0,
    message: "",
  });

  var arr = [];
  arr = JSON.parse(localStorage.getItem("users"));

  return (
    <div className="mybody d-flex justify-content-center  ">
      <div className="parentx ">
        <div>
          <FontAwesomeIcon
            icon={faX}
            className="fa-solid fa-circle-xmark exit cursor-pointer pt-4"
            onClick={() => click()}
          ></FontAwesomeIcon>
          <div className="d-flex justify-content-center">
            <div className="avatar ">
              <div className="row ">
                <img
                  className="col"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png"
                  alt="Skytsunami"
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="contentx rounded shadow-sm bg-light">
              <h3 className="header">
                <label htmlFor="">
                  Welcome : {arr.first_name} {arr.last_name}
                </label>
              </h3>
              <div className="text-center d-flex justify-content-center">
                <p style={{ maxWidth: "300px" }}>
                  Thank you for send this message :<br /> <br />
                  <label htmlFor="">{arr.message} </label>
                </p>
              </div>
              <h2>Special</h2>
              <label htmlFor="">Hotel Name : {arr.hotel_name} </label>
              <br />
              <label htmlFor="">Room Number : {arr.room_number} </label>
              <br />
              <br />

              <label htmlFor="">
                Technical Support Replay of Your Message Soon...{" "}
              </label>
              <label htmlFor="">For Your Email : {arr.email} </label>
              <br />
              <br />

              <h3 className="header">
                Thank You : {arr.first_name} {arr.last_name} !
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowMsg;
