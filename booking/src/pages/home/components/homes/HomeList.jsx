import React from "react";

import { useNavigate } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import Loader from "../../../../components/loader/Loader";
import { HomeItem } from "./HomeItem";

export const HomeList = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:9000/api/hotels/?featured=true&limit=4"
  );
  const rate = ["Excellent", "Perfect", "Cozy", "Not Bad"];

  const navigator = useNavigate();
  return (
    <div className="container my-4">
      <div className="row">
        <h2 className="my-3 fs-4">Homes guests love</h2>
        <>
          {loading ? (
            <Loader />
          ) : (
            data.map((item, index) => {
              //we can send the whole item here but we try to send properties of item only
              return (
                <HomeItem
                  img={item.photos[0]}
                  title={item.name}
                  place={item.city}
                  price={`${item.cheapestPrice}$`}
                  reviews={item.reviews.length}
                  rate={rate[Math.floor(Math.random() * 4)]}
                  rateNumb={Math.random().toFixed(1) * 10 + 0.9}
                  key={index}
                  click={() => navigator(`/hotels/${item._id}`)}
                />
              );
            })
          )}
        </>
      </div>
    </div>
  );
};
