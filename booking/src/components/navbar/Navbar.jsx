import React, { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="iti-bg-color  py-3">
      <div className="container-fluid container-md justify-content-between">
        <div className="row">
          <div className="col-4">
            <Link to="/" className="text-white text-decoration-none">
              <span className="navbar-logo fw-bold fs-4">Booking.iti</span>
            </Link>
          </div>

          {user ? (
            <div className="col-8 fw-bold d-flex justify-content-end align-items-start">
              <div className="d-flex border border-1 rounded border-secondary p-1">
                <div className="rounded bg-white">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/929/929564.png?ga=GA1.2.880645132.1668099314"
                    alt=""
                    className="img-fluid rounded text-white"
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>
                <span className="text-white px-2 text-capitalize">
                  {user.username}
                </span>
              </div>
              <div className="ps-3 pt-2 d-flex">
                <FontAwesomeIcon
                  title="logout"
                  className="logout"
                  color="white"
                  icon={faSignOut}
                  onClick={handleLogout}
                ></FontAwesomeIcon>
              </div>
            </div>
          ) : (
            <div className="navbar-items col-8 text-end">
              <Link to="/login">
                <button className="navbar-btn">Login</button>
              </Link>
              <Link to="/register">
                <button className="navbar-btn">Register</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
