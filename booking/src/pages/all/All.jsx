import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Navbar } from "../../components/navbar/Navbar";
import { Mail } from "../../components/mailUs/Mail";
import { Footer } from "../../components/footer/Footer";
import "./all.css";
import Loader from "../../components/loader/Loader";
import OneHotel from "./components/OneHotel";

const All = () => {
  const location = useLocation();

  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:9000/api/hotels/all?type=${location.state.itemType}`
  );

  return (
    <>
      <div>
        <Navbar />
        {loading && (
          <>
            <Loader />
          </>
        )}
        {data && (
          <div className="container-fluid container-md">
            {!loading && (
              <>
                {data.length !== 0 && (
                  <h1 className="text-center my-5">Stays We Have</h1>
                )}
              </>
            )}
            <div className="row align-items-center">
              {data.map((item, index) => {
                return <OneHotel item={item} key={index} />;
              })}
            </div>
          </div>
        )}{" "}
        {data.length === 0 && (
          <div className="container" style={{ height: "70vh" }}>
            <div className="p-4 text-center">
              <h1 className="fw-bold fs-2">Coming Soon</h1>
            </div>
          </div>
        )}
        <Mail />
        <Footer />
      </div>
    </>
  );
};

export default All;
