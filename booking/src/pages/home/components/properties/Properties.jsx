import React from "react";
import useFetch from "../../../../hooks/useFetch";
import Loader from "../../../../components/loader/Loader";
import "./properties.css";
import { PropertyItem } from "./PropertyItem";
export const Properties = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:9000/api/hotels/countByType"
  );

  const images = [
    "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1450361/pexels-photo-1450361.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div className="container-fluid container-md d-flex justify-content-center align-items-center my-3">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="row">
            <h2 className="mb-4 mt-3 fs-4 fw-bold text-capitalize">
              browse by property type
            </h2>
            {images.map((image, index) => {
              return (
                <PropertyItem item={data[index]} img={image} key={index} />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
