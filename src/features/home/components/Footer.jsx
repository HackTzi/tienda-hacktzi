import React from "react";

//assets
import logo from "../assets/logo.svg";

//style
import "./sass/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer__logo">
        <figure>
          <img src={logo} alt="" />
        </figure>
      </div>
      <div className="footer__options">
        <div className="options" style={{borderLeft: "solid 5px #6B407E"}}>
          <a href="/">Informacion de envíos</a>
          <div className="Arrow"></div>
        </div>
        <div className="options" style={{borderLeft: "solid 5px #29B8E8"}}>
          <a href="/">Política de devoluciones</a>
          <div className="Arrow"></div>
        </div>
        <div className="options" style={{borderLeft: "solid 5px #FA7800"}}>
          <a href="/">Métodos de pago</a>
          <div className="Arrow"></div>
        </div>
        <div className="options" style={{borderLeft: "solid 5px #CB161D"}}>
          <a href="/">Política de privacidad</a>
          <div className="Arrow"></div>
        </div>
        <div className="options" style={{borderLeft: "solid 5px #33B13A"}}>
          <a href="/">Términos y Condiciones</a>
          <div className="Arrow"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
