import React from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navber from "../../components/navber/Navber";
// import styles from "./home.module.scss";
import Sideber from "../../components/sideber/Sideber";
import Wedget from "../../components/widget/Wedget";
import TableList from "./../../components/table/TableList";

export default function Home() {
  return (
    <div className="parent ">
      <div className={` d-flex`}>
        <div className=" col-2 ">
          <Sideber />
        </div>

        <div className="col-10 mainContant">
          <Navber />
          <div className="wedget container-fluid mt-2  ">
            <div className="row">
              <Wedget type="Users" fetchUrl="users" />
              <Wedget type="Hotels" fetchUrl="hotels" />
              <Wedget type="Rooms" fetchUrl="rooms" />
            </div>
          </div>

          <div className="charets container-fluid">
            <div className="row">
              <div className="col-lg-4 my-2">
                <Featured />
              </div>
              <div className="col-lg-8 my-2">
                <Chart aspect={2 / 1} title="Last 6 Month (Reveune)" />
              </div>
            </div>
          </div>
          <div className="listContainer shadow-none p-3 mb-5  border border-1 border-secondary  rounded p-2 m-5">
            <div className="listTitle mb-4 text-secondary fw-bold">
              lates transactions
            </div>
            <TableList />
          </div>
        </div>
      </div>
    </div>
  );
}
