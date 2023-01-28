import React, { useContext } from "react";
import styles from "./navber.module.scss";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import NotificationImportantOutlinedIcon from "@mui/icons-material/NotificationImportantOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import { DarkModeContext } from "./../../context/darkModeContext";

export default function Navber() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg  text-muted border border-1 border-secondary rounded m-2 ">
        <div className="container-fluid">
          <button
            className="navbar-toggler my-2 bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className={`${styles.items} navbar-nav  mb-2 ms-auto mb-lg-0  pointer`}
            >
              <li className="nav-item m-1">
                <LanguageOutlinedIcon />
                <span>English</span>
              </li>
              <li
                onClick={() => dispatch({ type: "TOGGEL" })}
                className="nav-item m-1"
              >
                <DarkModeOutlinedIcon />
              </li>
              <li className={` nav-item m-1 position-relative   `}>
                <ChatOutlinedIcon />
                <span className={`${styles.counter}`}>2</span>
              </li>
              <li className="nav-item m-1">
                <FullscreenExitOutlinedIcon />
              </li>
              <li className="nav-item m-1 position-relative">
                <NotificationImportantOutlinedIcon />
                <span className={`${styles.counter}`}>2</span>
              </li>
              <li className="nav-item m-1">
                <ListOutlinedIcon />
              </li>
              <li className="nav-item mx-1">
                <img
                  src="https://github.com/mdo.png"
                  alt="hugenerd"
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
