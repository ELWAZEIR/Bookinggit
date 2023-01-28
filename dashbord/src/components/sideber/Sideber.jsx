import React from "react";
import styles from "./Sideber.module.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HouseIcon from "@mui/icons-material/House";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import QrCodeOutlinedIcon from "@mui/icons-material/QrCodeOutlined";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./../../context/darkModeContext";
import { AuthContext } from "../../context/AuthContext";
export default function Sideber() {
  const { dispatch } = useContext(DarkModeContext);
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("user");

    window.location.reload();
  };

  return (
    <div className="container-fluid sticky-top  ">
      <div className="row flex-nowrap">
        <div className="col-auto col-12  px-sm-2 px-0 bg-dark  border-secondary border-end">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <div className=" fw-bold text-capitalize">
              <h2>{user.username || "Admin"}</h2>
            </div>

            <ul
              className={` nav nav-pills flex-column mb-sm-auto mb-0  align-items-sm-start" id="menu`}
            >
              <li>
                <a
                  href="#submenuMAIN"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-grid"></i>{" "}
                  <span className="ms-1  d-sm-inline text-light">MAIN</span>{" "}
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenuMAIN"
                  data-bs-parent="#menu"
                >
                  <li className="nav-item ">
                    <NavLink to="/" className="nav-link align-middle px-0">
                      <DashboardIcon className="icon" />
                      <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="#submenuLISTS"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-grid"></i>{" "}
                  <span className="ms-1  d-sm-inline text-light">LISTS</span>{" "}
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenuLISTS"
                  data-bs-parent="#menu"
                >
                  <li className="nav-item">
                    <NavLink to="/users" className="nav-link align-middle px-0">
                      <PermIdentityOutlinedIcon className="icon" />
                      <span className="ms-1 d-none d-sm-inline">users</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/hotels"
                      className="nav-link align-middle px-0"
                    >
                      <HouseIcon className="icon" />
                      <span className="ms-1 d-none d-sm-inline">Hotels</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/rooms" className="nav-link align-middle px-0">
                      <HouseIcon className="icon" />
                      <span className="ms-1 d-none d-sm-inline">Rooms</span>
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>

            <div className={`${styles.bottom} dropdown pb-4 `}>
              <a
                href="#"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div>
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    alt="hugenerd"
                    width="30"
                    height="30"
                    className="rounded-circle"
                  />
                  <span className="mx-2">{user.username}</span>
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li className="cursor-pointer">
                  <button className="dropdown-item" onClick={handleLogout}>
                    <LogoutOutlinedIcon />
                    log out
                  </button>
                </li>
              </ul>
              <div>
                <div className="mt-3">
                  <button
                    onClick={() => dispatch({ type: "DARK" })}
                    className=" btn  btn-outline-light m-1 "
                  >
                    d
                  </button>
                  <button
                    onClick={() => dispatch({ type: "LIGHT" })}
                    className=" btn  btn-outline-light m-1 "
                  >
                    l
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
