import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";

import NCLogoRed from "../assets/NCLogoRed.png";

const Login = () => {
  const [localUsername, setLocalUsername] = useState("");
  const [localCompany, setLocalCompany] = useState("");
  const [localEmail, setLocalEmail] = useState("");

  const { dispatch } = useContext(AppContext);

  let navigate = useNavigate();

  return (
    <>
      <img className="main-logo" src={NCLogoRed} alt="RED LOGO THERE PAL" />
      <form className="inputs">
        <input
          name="username"
          placeholder="Username"
          className="form-input"
          onChange={(event) => {
            setLocalUsername(event.target.value);
          }}
          value={localUsername}
        />
        <input
          name="company"
          placeholder="Company"
          className="form-input"
          onChange={(event) => {
            setLocalCompany(event.target.value);
          }}
          value={localCompany}
        />
        <input
          name="email"
          placeholder="Email"
          className="form-input"
          onChange={(event) => {
            setLocalEmail(event.target.value);
          }}
          value={localEmail}
        />
        <Link to="/intro">
          <button
            type="submit"
            onClick={async (event) => {
              event.preventDefault();
              await addDoc(collection(db, "users"), {
                username: localUsername,
                company: localCompany,
                email: localEmail,
                startTime: Date.now(),
              });
              dispatch({
                type: "submit",
                value: {
                  username: localUsername,
                  company: localCompany,
                  email: localEmail,
                  startTime: Date.now(),
                },
              });
              navigate("/intro");
            }}
            className="enter-button"
          >
            Begin
          </button>
        </Link>
      </form>
    </>
  );
};

export default Login;
