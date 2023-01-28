import React from "react";
import { useNavigate } from "react-router-dom";

const OneHotel = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" col-12 col-md-6 col-lg-3 my-3">
        <div
          className=" xcontainer"
          onClick={() => {
            navigate(`/hotels/${props.item._id}`);
          }}
        >
          <div className="img-container">
            <img src={props.item.photos[0]} alt="" />
          </div>
          <div className="user-info py-3">
            <div className="d-flex justify-content-between">
              <span className="fs-5 fw-bold">{props.item.title}</span>
              <span className="fw-bold">{props.item.cheapestPrice}$</span>
            </div>
            <div>
              <span className="text-secondary">{props.item.address}</span>
            </div>
            <div>
              <span className="text-secondary">
                {props.item.rooms.length !== 0 ? (
                  <>Hotel Have {props.item.rooms.length} Rooms</>
                ) : (
                  <>Click To See More Details</>
                )}
              </span>
            </div>
            <div>
              <span className="">{props.item.distance}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneHotel;
