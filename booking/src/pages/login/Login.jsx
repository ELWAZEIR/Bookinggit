import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Welcome from "../../components/welcome/Welcome";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validateClientError, setValidateClientError] = useState([]);

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const handleInput = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:9000/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  const navigate = useNavigate();
  return (
    <section className="d-flex align-items-center justify-content-center w-100 vh-100 iti-bg-color">
      <div className="container-fluid container-sm">
        <div className="row align-items-start justify-content-center">
          {/* welcoming div  */}

          <Welcome
            texting="Please Login To Continue To Our Website"
            questioning="Don't Have Account ?"
            link="/register"
            answering="Create One"
          />

          {/* login form */}
          <div
            className="card col-10 col-md-8 col-lg-6 text-center "
            style={{ width: "400px" }}
          >
            <div className="py-3">
              <h1>Login</h1>
              {error && (
                <>
                  <div className="text-danger fw-bold my-1">
                    {error.message || ""}
                  </div>
                </>
              )}
            </div>
            <div className="py-5 d-flex justify-content-center align-items-center">
              <form onSubmit={handleLogin} className="col-md-7">
                <div className="mb-3 text-start">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    onChange={handleInput}
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                  />
                  {validateClientError.map((error, index) =>
                    error.path[0] === "username" ? (
                      <div key={index} className="text-danger">
                        {error.message}
                      </div>
                    ) : (
                      ""
                    )
                  )}
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    onChange={handleInput}
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                  />
                  {validateClientError.map((error, index) =>
                    error.path[0] === "password" ? (
                      <div key={index} className="text-danger">
                        {" "}
                        "password invalid"
                      </div>
                    ) : (
                      ""
                    )
                  )}
                </div>

                <div className="py-2">
                  <button
                    type="submit"
                    className="btn btn-outline-primary"
                    style={{ width: "200px" }}
                  >
                    {isLoading ? (
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
