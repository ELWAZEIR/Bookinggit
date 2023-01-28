import React from "react";
import Navber from "../../components/navber/Navber";
import Sideber from "../../components/sideber/Sideber";
import DataTable from "./../../components/dataTable/DataTable";

export default function List({ columns }) {
  return (
    <div className="list">
      <div className=" d-flex">
        <div className="col-2">
          <Sideber />
        </div>
        <div className="col-10">
          <Navber />
          <DataTable columns={columns} />
        </div>
      </div>
    </div>
  );
}
