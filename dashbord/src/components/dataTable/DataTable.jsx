import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { UserRows, userColumns } from "../../dataTableSorce";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import axios from "axios";

function DataTable({ columns }) {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState([]);
  const { data, loading, error } = useFetch(
    `http://localhost:9000/api/${path}`
  );
  const handelDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/api/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };

  useEffect(() => {
    setList(data);
  }, [data]);
  const actionColum = [
    {
      fild: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellAction d-flex align-items-center gap-3">
            <div
              className=" btn btn-danger text-white "
              onClick={() => handelDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="dataTable ">
      <div className="tableTitel  d-flex justify-content-between mb-2">
        <h3 className="fw-bold text-muted text-capitalize">{path}</h3>
        <NavLink className="btn  btn-dark  btn-sm mx-2 " to={`/${path}/new`}>
          <div className="mt-1">Add New</div>
        </NavLink>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColum)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}

export default DataTable;
