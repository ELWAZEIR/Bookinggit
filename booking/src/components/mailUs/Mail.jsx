import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "../mailUs/mail.css";
export const Mail = () => {
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubscribe = () => {
    navigate("/register", { state: { email } });
  };
  return (
    <div
      className="d-flex justify-content-center flex-column align-items-center w-100 my-3 iti-bg-color"
      style={{ height: "300px" }}
    >
      <div className="text-center">
        <h2 className="text-white">Save time,save money!</h2>
        {user && (
          <>
            <p className="text-white">
              {user.username} You Are Subscribed To Know Latest Hotels Available
              With Best Offers <br />
            </p>
          </>
        )}
        {!user && (
          <>
            <p className="text-white">
              Sign up and we'll send the best deals to you
            </p>
            <div className="d-flex">
              <input
                type="text"
                placeholder="Your email"
                name="email"
                id="email"
                className="p-2 mx-3"
                style={{ width: "300px", outline: "none" }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <button
                className="btn text-white"
                style={{ backgroundColor: "#0071C2" }}
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
