import "./about.css";
import { Navbar } from "../../components/navbar/Navbar";
import Carousel from "../../components/carousel/Carousel";
import { Header } from "../../components/header/Header";
import { Mail } from "../../components/mailUs/Mail";
import { Footer } from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch";
import Item from "./components/Item";
import { useNavigate, NavLink } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    "http://localhost:9000/api/hotels/?featured=true&limit=3"
  );
  const photos = [
    "https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=338&ext=jpg&ga=GA1.2.880645132.1668099314",
    "https://img.freepik.com/free-vector/flat-hotel-building_23-2148162501.jpg?size=338&ext=jpg&ga=GA1.2.880645132.1668099314",
    "https://img.freepik.com/free-vector/flat-hotel-booking-concept_52683-7995.jpg?size=626&ext=jpg&ga=GA1.2.880645132.1668099314",
    "https://img.freepik.com/premium-vector/hotel-building-isolated-city-street-vector-illustration-flat-cartoon_101884-680.jpg?size=626&ext=jpg&ga=GA1.2.880645132.1668099314",
  ];

  return (
    <>
      <Navbar />
      <Header />
      <Carousel />
      <div className="container">
        <div className=" row my-5">
          <Item
            photo={photos[0]}
            title={"We Care About Hospitality"}
            desc={
              "The hotel was the perfect array of homey hues, for they gave a sense of home away from home, of a place of nurturing safety."
            }
          />
          <Item
            photo={photos[1]}
            title={"We Care About Customers"}
            desc={
              "The hotel was the perfect array of homey hues, for they gave a sense of home away from home, of a place of nurturing safety."
            }
          />
          <Item
            photo={photos[2]}
            title={"We Care About Guests"}
            desc={
              "The hotel was the perfect array of homey hues, for they gave a sense of home away from home, of a place of nurturing safety."
            }
          />
          <Item
            photo={photos[3]}
            title={"We Care About Places"}
            desc={
              "The hotel was the perfect array of homey hues, for they gave a sense of home away from home, of a place of nurturing safety."
            }
          />
        </div>

        <div className=" my-5 p-3 position-sticky top-0 shadow-sm bg-white">
          <h1 className=" text-center">Recommended Hotels</h1>
        </div>

        {data && (
          <>
            {data.map((item) => {
              return (
                <>
                  <div className="col-12">
                    <div
                      className="container-fluid container-md rounded shadow-sm bg-white my-4"
                      style={{ overflow: "hidden", height: "max-content" }}
                    >
                      <div className="row">
                        <div className="col-5 d-none d-sm-block ps-0">
                          <img
                            src={item.photos[0]}
                            alt=""
                            className="img-fluid h-100 w-100"
                          />
                        </div>
                        <div className="col-12 col-sm-7 py-4">
                          <div className="d-flex flex-column">
                            <div className="row px-2 py-3">
                              <div className="d-flex justify-content-between text-secondary">
                                <span>Media</span>
                                <span>17 hours ago</span>
                              </div>
                            </div>
                            <div className="">
                              <h3 className=" fw-bold">{item.name}</h3>
                              <p
                                className="w-75"
                                style={{
                                  letterSpacing: "1.5px",
                                  fontSize: "12px",
                                  fontWeight: "100",
                                }}
                              >
                                {item.description}.A hotel is an establishment
                                that provides paid lodging on a short-term
                                basis. Facilities provided inside a hotel room
                                may range from a modest-quality mattress in a
                                small room to large suites with bigger,
                                higher-quality beds
                              </p>
                            </div>
                            <div className="d-flex justify-content-end">
                              <NavLink to={`/hotels/${item._id}`}>
                                Read More
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div
                    className=" shadow-sm c rounded my-5 "
                    style={{ height: "250px" }}
                  >
                    <div className=" row ">
                      <div className="col-lg-5 col-md-6 col-sm-12 ">
                        <div>
                          <img
                            src={item.photos[2]}
                            alt=""
                            className=" w-75  rounded-3 "
                            style={{ height: "250px" }}
                          />
                        </div>
                      </div>
                      <div className=" col-lg-7 col-md-6 col-sm-12 ">
                        <h2
                          className="text-center cursor-pointer my-4 iti-text-color"
                          onClick={() => {
                            navigate(`/hotels/${item._id}`);
                          }}
                        >
                          {item.title}
                        </h2>
                        <p className="fs-6 px-4">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Blanditiis nisi deserunt id veniam, possimus ex
                          recusandae repudiandae voluptatibus voluptate aliquam
                          error temporibus numquam ipsa harum totam, optio nobis
                          reprehenderit illo! Lorem, ipsum dolor sit amet
                          consectetur adipisicing elit. Blanditiis
                        </p>
                      </div>
                    </div>
                  </div> */}
                </>
              );
            })}
          </>
        )}
      </div>
      <Mail />
      <Footer />
    </>
  );
};

export default About;
