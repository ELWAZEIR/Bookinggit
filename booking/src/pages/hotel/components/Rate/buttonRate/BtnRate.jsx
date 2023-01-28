import { useState } from "react";
import Star from "../Star/Star";
import "./btnRate.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import axios from "axios";

const BtnRate = ({ closeReviews }) => {
  const userFromLocal = JSON.parse(localStorage.getItem("user")) || "";
  const usernameFromLocal = userFromLocal.username || "Anonymous";

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [open, setOpen] = useState(false);
  const [openTheEdn, setOpenTheEdn] = useState(false);
  const [rate, setRate] = useState(1);
  const [comment, setComment] = useState("");

  const opens = () => {
    setOpen(false);
    setOpenTheEdn(false);
  };

  const getRate = (x) => {
    setRate(x);
  };
  const handleSendData = async () => {
    try {
      await axios.post(`http://localhost:9000/api/reviews/${id}`, {
        rate: rate,
        title: comment,
        username: usernameFromLocal,
      });
      closeReviews(false);

      setOpenTheEdn(true);
      setTimeout(() => {
        setOpenTheEdn(false);
        setOpen(false);
      }, 5000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {open && (
        <div className="slider d-flex justify-content-center">
          <div className=" row w-50 ">
            <div className="bg-light position-relative rounded-2 p-4">
              <FontAwesomeIcon
                icon={faX}
                className=" close"
                onClick={() => opens()}
              />
              <div className="text-center">
                <h1>Rating</h1>
              </div>
              <div className="">
                <Star click={getRate} />
              </div>
              <div className="form-outline my-3">
                <textarea
                  cols="100"
                  rows="7"
                  placeholder="write a comment"
                  className="form-control"
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                ></textarea>
              </div>

              <div className="">
                <button
                  onClick={handleSendData}
                  className="btn btn-outline-primary rounded-1 "
                >
                  Send Message
                </button>
              </div>
              {openTheEdn && (
                <div className="txtEnd my-3 ">
                  <div className="title p-2 rounded-3">
                    <h4>Thank You</h4>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => {
          setOpen(true);
        }}
        className="btn iti-bg-color fw-bold px-3 text-white"
      >
        Add Review
      </button>
    </>
  );
};

export default BtnRate;
