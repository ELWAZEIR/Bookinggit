import React from "react";
import "./featured.css";
import useFetch from "../../../../hooks/useFetch";
import { FeaturedItem } from "./components/featured-item/Featured-Item";
import Loader from "../../../../components/loader/Loader";

export const Featured = () => {
  const cities = ["berlin", "madrid", "cairo", "london"];

  const { data, loading, error } = useFetch(
    `http://localhost:9000/api/hotels/countByCity?cities=${cities[0]},${cities[1]},${cities[2]},${cities[3]}`
  );

  const images = [
    "https://images.pexels.com/photos/38906/federal-chancellery-federal-government-government-chancellor-38906.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3994380/pexels-photo-3994380.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/11517391/pexels-photo-11517391.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2561281/pexels-photo-2561281.jpeg?auto=compress&cs=tinysrgb&w=400",
  ];
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container-fluid container-md mt-5">
          <div className="row">
            {images.map((image, index) => {
              return (
                <FeaturedItem
                  img={image}
                  title={cities[index]}
                  count={data[index]}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
