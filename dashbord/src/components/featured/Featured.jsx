import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
export default function Featured() {
  return (
    <div className="  border border-1 border-secondary rounded m-1 text-muted">
      <div className="top d-flex justify-content-between">
        <h3 className=" fs-3">total Revenue</h3>
        <MoreVertIcon />
      </div>
      <div className="bottom  p-3 d-flex flex-column justify-content-center align-items-center g-2">
        <div className="progressber w-50">
          <CircularProgressbar value={40} text={"40%"} strokeWidth={5} />
        </div>
        <div className="details text-center">
          <p>total sales today</p>
          <p className="   fs-3">234 $</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="summry  d-flex justify-content-between w-100  align-items-lg-center text-center">
          <div className="item">
            <p>target</p>
            <span>
              <UnfoldMoreIcon />
            </span>
            <span>$12.3k</span>
          </div>
          <div className="item">
            <p>last week</p>
            <span>
              <UnfoldMoreIcon />
            </span>
            <span>$12.3k</span>
          </div>
          <div className="item">
            <p>last month</p>
            <span>
              <UnfoldMoreIcon />
            </span>
            <span>$12.3k</span>
          </div>
        </div>
      </div>
    </div>
  );
}
