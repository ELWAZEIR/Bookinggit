import React from "react";
import Navber from "../../components/navber/Navber";
import Sideber from "./../../components/sideber/Sideber";
import Chart from "./../../components/chart/Chart";
import TableList from "../../components/table/TableList";

export default function Single() {
  return (
    <div className=" d-flex">
      <div className="side col-2">
        <Sideber />
      </div>
      <div className="single col-10">
        <Navber />
        <div className="container top">
          <div className="row">
            <div className="col-md-4  ">
              <div class="card mb-3">
                <div className=" d-flex justify-content-between p-2 text-muted">
                  <h5>information</h5>
                  <span>Edit</span>
                </div>
                <div class="row g-0">
                  <div class="col-md-4 px-sm-4 px-md-0">
                    <img
                      src="https://github.com/mdo.png"
                      class="img-fluid  rounded-circle  "
                      alt="img"
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title"> name :</h5>
                      <h5 class="card-title">mohamed</h5>

                      <p class="">Email :</p>
                      <p>moha@gmail.com</p>
                 
                      <p class="">
                        <small class="text-muted">Last updated mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 ">
              <Chart  aspect={3 / 1} title='user spending last 6 month'/>
            </div>
          </div>
        </div>
        <div className=" m-3">
        <TableList />
        </div>
      </div>
    </div>
  );
}
