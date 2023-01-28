import React from "react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <span
                className="nav-link px-2 text-muted"
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
              >
                Home
              </span>
            </li>
            <li className="nav-item">
              <span
                href="https://www.iti.gov.eg/iti/home"
                className="nav-link px-2 cursor-pointer text-muted"
              >
                Features
              </span>
            </li>
            <li className="nav-item">
              <span
                href="https://www.iti.gov.eg/iti/home"
                className="nav-link px-2 cursor-pointer text-muted"
              >
                Pricing
              </span>
            </li>
            <li className="nav-item">
              <a
                href="https://www.iti.gov.eg/iti/home"
                className="nav-link px-2 cursor-pointer text-muted"
              >
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <span
                className="nav-link px-2 cursor-pointer text-muted"
                onClick={() => navigate("/about")}
              >
                About
              </span>
            </li>
          </ul>
          <p className="text-center  text-muted">© 2022 ITI, Team</p>
        </footer>
      </div>
    </div>
  );
};
