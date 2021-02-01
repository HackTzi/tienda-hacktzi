import React from "react";
import Button from "./components/Button";

import "./sass/Login.scss";
import logo from "./assets/logo-platzi.svg";
import facebook from "./assets/facebook.png";
import google from "./assets/google.png";

function Login() {
  return (
    <div className="login">
      <img className="logo" src={logo} alt="logo" />
      <form className="form">
        <label className="form--label" htmlFor="email">
          Email
          <input type="email" id="email" placeholder="Ingresa tu email" autoComplete="off" />
        </label>

        <label className="form--label" htmlFor="contraseña">
          Contraseña
          <input
            type="password"
            id="contraseña"
            placeholder="Ingresa tu contraseña"
          />
        </label>

        <Button text={"Iniciar Sesión"} />
        <a href="/" className="link">
          ¿Olvidaste tu contraseña?
        </a>
        <div className="social">
          <button type="button">
            <img className="social--login" src={facebook} alt="facebook" />
          </button>
          <button type="button">
            <img className="social--login" src={google} alt="google" />
          </button>
        </div>
      </form>
      <p className="cuenta">
        ¿Aún no tienes cuenta?{" "}
        <a href="/" className="link">
          Registrate
        </a>
      </p>
    </div>
  );
}

export default Login;
