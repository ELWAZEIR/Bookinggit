import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Joi from "joi";
import Welcome from "../../components/welcome/Welcome";

const Register = () => {
  const location = useLocation();
  const [error, setError] = useState("");
  let email = location.state ? location.state.email : "";
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  //??
  const [isLoading, setIsLoading] = useState(false);
  const [validateClientError, setvalidateClientError] = useState([]);
  //??

  //when user type this function fires
  const handleInput = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  //create email in database
  const handleRegister = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    let validation = validationRegisterForm();
    if (validation.error) {
      setvalidateClientError(validation.error.details);
      setIsLoading(false);
    } else {
      try {
        const res = await axios.post(
          "http://localhost:9000/api/auth/register",
          credentials
        );

        navigate("/login");
      } catch (err) {
        if (err.response.data.message.includes("username_1")) {
          console.log("name error");
          setError("username is exist");
        } else {
          console.log("email error");
          setError("email is exist");
        }
      }
      setIsLoading(false);
    }
  };

  function validationRegisterForm() {
    let schema = Joi.object({
      username: Joi.string().alphanum().min(3).max(16).required(),
      email: Joi.string()
        .required()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net", "eg"] },
        }),
      password: Joi.string()
        .required()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,16}$")),
    });
    return schema.validate(credentials, { abortEarly: false });
  }

  const navigate = useNavigate();
  return (
    <section className="d-flex align-items-center justify-content-center w-100 vh-100 iti-bg-color">
      <div className="container-fluid container-sm">
        <div className="row justify-content-center align-items-center">
          {/* welcome div */}
          <Welcome
            texting="Please Register To Continue To Our Website"
            questioning="Have Account ?"
            link="/login"
            answering="Login Now"
          />

          {/* register form */}
          <div
            className="card col-10 col-md-8 col-lg-6 text-center"
            style={{ width: "400px" }}
          >
            <div className="py-2">
              <h1>Register</h1>
            </div>
            <div className="py-5 d-flex justify-content-center align-items-center">
              <form onSubmit={handleRegister} className="col-md-7">
                {error && <p className=" alert alert-danger">{error}</p>}
                <div className="mb-3 text-start">
                  <label htmlFor="username" className="htmlForm-label ">
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
                      <div key={index} className=" text-danger form-text  fs-6">
                        {error.message}
                      </div>
                    ) : (
                      ""
                    )
                  )}
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    onChange={handleInput}
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    defaultValue={email || undefined}
                  />
                  {validateClientError.map((error, index) =>
                    error.path[0] === "email" ? (
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
                    Password{" "}
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
                        "password invalid"
                      </div>
                    ) : (
                      ""
                    )
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-primary my-2"
                  style={{ width: "200px" }}
                >
                  {isLoading ? (
                    <div className="spinner-border"></div>
                  ) : (
                    "register"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
