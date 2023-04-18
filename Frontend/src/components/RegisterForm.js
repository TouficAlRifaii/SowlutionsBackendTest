import React from "react";
import "../styles/style.css";
import "../styles/materialize.css";
import "../styles/materialize.min.css";
import axios from "../api/axios.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nickName", username);
    const response = await axios.post("/register", formData);
    if (response.data["message"] === "success") {
      localStorage.setItem("user", JSON.stringify(response.data["data"]));
      navigate("/");
    }
  };

  //   useEffect(() => {
  //     console.log("username", username);
  //   }, [username]);

  return (
    <>
      <div className="section blue lighten-3">
        <div className="container white-text center-align text">
          <h2>Chat App.</h2>
          <p>SOWLUTIONS.</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col s12 m8 l6 offset-m2 offset-l3">
            <div className="section center-block">
              <div>
                <h3>input you username to Login</h3>
                <form id="login-form" className="form-group" method="post">
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        name="username"
                        id="id_username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      {/* <label htmlFor="id_username">Username</label> */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s8">
                      <a href="/login">Login</a>
                    </div>
                    <div className="col s4">
                      <div className="right">
                        <button
                          className="btn blue waves-effect waves-light pull-s12"
                          onClick={(e) => handleSubmit(e)}
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
