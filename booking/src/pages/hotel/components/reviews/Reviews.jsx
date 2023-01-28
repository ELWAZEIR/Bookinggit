import React from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Loader from "../../../../components/loader/Loader";
const Reviews = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, loading, error } = useFetch(
    `http://localhost:9000/api/reviews/${id}`
  );

  return (
    <>
      <div className="m-5 " style={{ maxHeight: "400px", overflow: "scroll" }}>
        <MDBTable
          align="middle table-hover"
          className="table-responsive  table-light "
        >
          <MDBTableHead>
            <tr>
              <th scope="col">Reviews</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data.length === 0 && !loading && (
              <div className="d-flex justify-content-center fs-3 fw-bold pt-5">
                Sorry No Reviews On This Hotel
              </div>
            )}
            {loading && <Loader />}
            {data && (
              <div>
                {data.map((item) => {
                  return (
                    <>
                      <tr className="d-flex w-100">
                        <td>
                          <div>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                              />
                              <div className="d-flex align-items-center">
                                <span className="fw-bold m-2">
                                  {item.username}
                                </span>
                                <div>
                                  {[...Array(item.rate)].map((i) => {
                                    return (
                                      <>
                                        <FontAwesomeIcon icon={faStar} />
                                      </>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                            <div className="ms-5">
                              <p className="fw-light mb-0">{item.title}</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </div>
            )}
          </MDBTableBody>
        </MDBTable>
      </div>
    </>
  );
};

export default Reviews;
