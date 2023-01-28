import React, { useContext, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import Reviews from "./components/reviews/Reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from "../../components/mailUs/Mail";
import { Footer } from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reservation from "./components/reservationRoom/Reservation";
import Booking from "./components/booking/Booking";
import BtnRate from "./components/Rate/buttonRate/BtnRate";
import Loader from "../../components/loader/Loader";
import {
  faLocation,
  faArrowLeft,
  faArrowRight,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import "./hotel.css";

export const Hotel = () => {
  const { date, options } = useContext(SearchContext);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [sliderIndex, setSliderIndex] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);
  const [openRoomModel, setOpenRoomModel] = useState(false);
  const [openReviews, setOpenReviews] = useState(false);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  //fetch data from api
  const { data, loading, error } = useFetch(
    `http://localhost:9000/api/hotels/find/${id}`
  );

  //open slider and set index of images

  const handlingOpenSlider = (index) => {
    setSliderIndex(index);
    setOpenSlider(true);
  };
  const handleSliderImgs = (direction) => {
    let newImgNumber;
    if (direction === "l") {
      newImgNumber = sliderIndex === 0 ? 5 : sliderIndex - 1;
    } else {
      newImgNumber = sliderIndex === 5 ? 0 : sliderIndex + 1;
    }
    setSliderIndex(newImgNumber);
  };

  //open adding review component
  const openReview = () => {
    if (openReviews === false) {
      setOpenReviews(true);
    } else setOpenReviews(false);
  };

  //handle book now button to show room model
  const handleBooking = () => {
    if (user) {
      setOpenRoomModel(true);
    } else {
      navigate("/login");
    }
  };

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  const dayDifference = (date1, date2) => {
    const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  };
  const days = dayDifference(date[0]?.endDate, date[0]?.startDate);

  const price = days * data.cheapestPrice * options.room;

  return (
    <div>
      <Navbar />
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* IMAGE SLIDER */}
          {openSlider && (
            <>
              <div className="slider">
                <FontAwesomeIcon
                  icon={faX}
                  className="closeIcon"
                  onClick={() => {
                    setOpenSlider(false);
                  }}
                />
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="arrow"
                  onClick={() => {
                    handleSliderImgs("l");
                  }}
                />
                <div className="sliderWrapper">
                  <img
                    src={data.photos[sliderIndex]}
                    alt=""
                    className=" img-fluid rounded  sliderImg"
                  />
                </div>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="arrow"
                  onClick={() => handleSliderImgs("r")}
                />
              </div>
            </>
          )}
          {/* IMAGE SLIDER */}

          <div className="container mt-4">
            <div className="row justify-content-between">
              <div className="col-12 col-md-8 mb-4">
                <div className="d-flex flex-column ps-0 p-4">
                  <div className="d-flex justify-content-between">
                    <h3>{data.name}</h3>

                    {/* ADD RATE COMPONENT */}
                    <BtnRate closeReviews={setOpenReviews} />
                    {/* ADD RATE COMPONENT */}
                  </div>

                  <div>
                    <FontAwesomeIcon icon={faLocation} />
                    <span> {data.address} </span>
                  </div>
                  <span className="text-success">{data.distance}</span>

                  <span className="fw-bold text-primary">
                    Book a stay over $114 at this property and get free airport
                    taxi
                  </span>
                </div>
              </div>

              {/* BOOKING ROOM OUTSIDE COMPONENT */}
              <Booking
                days={days}
                price={price}
                options={options}
                handleBooking={handleBooking}
              />
              {/* BOOKING ROOM OUTSIDE COMPONENT */}

              <div className="col-12 mb-4">
                <div className="row">
                  {data.photos.map((photo, index) => (
                    <div className="col-4 my-2">
                      <img
                        src={photo}
                        alt=""
                        className="img-fluid w-100 h-100"
                        style={{ cursor: "pointer" }}
                        onClick={() => handlingOpenSlider(index)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="row mx-0 mt-4">
                <div className="col-12 col-md-8  p-4 ps-0">
                  <h2 className="text-capitalize">
                    Stay in the heart of {data.city}
                  </h2>

                  <p>{data.description}</p>
                </div>
                {/* BOOKING ROOM COMPONENT */}
                <Booking
                  days={days}
                  price={price}
                  options={options}
                  handleBooking={handleBooking}
                />
                {/* BOOKING ROOM COMPONENT */}

                <div className="d-flex justify-content-center p-0">
                  <button
                    className="btn iti-bg-color fw-bold text-white p-2"
                    style={{ width: "430px" }}
                    onClick={openReview}
                  >
                    {openReviews && "Hide Reviews"}
                    {!openReviews && "Show Reviews"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* REVIEWS COMPONENT */}
          <div className="reviews">{openReviews && <Reviews />}</div>
          {/* REVIEWS COMPONENT */}
          {/* MAIL COMPONENT */}
          <Mail />
          {/* MAIL COMPONENT */}
          {/* FOOTER COMPONENT */}
          <Footer />
          {/* FOOTER COMPONENT */}

          {/* BOOK ROOM INSIDE COMPONENT */}
          {openRoomModel && (
            <Reservation setOpen={setOpenRoomModel} hotelId={id} key={id} />
          )}
          {/* BOOK ROOM INSIDE COMPONENT */}
        </>
      )}
    </div>
  );
};
