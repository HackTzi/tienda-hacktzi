import React from "react";
import Button from "../login/components/Button";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./sass/homeCarrusel.scss";

import logo from "../login/assets/logo-platzi.svg";
import firstBanner from "./assets/firstBanner.png";
import secondBanner from "./assets/secondBanner.png";
import thirdBanner from "./assets/thirdBanner.png";

const HomeCarruselScreen =  () => {
  return (
    <div className="view">
      <Carousel showThumbs={false} >
      <div className="step">
        <img className="logo" src={logo} alt="logo" />
        <img className="banner" src={thirdBanner} alt="logo" />
        <h1 className="title">Platzi Store ha llegado </h1>
        <p className="descriptionBanner">Compra tus productos favoritos de Platzi desde la comodidad de tu casa </p>
      </div>
      <div className="step">
        <img className="logo" src={logo} alt="logo" />
        <img className="banner" src={secondBanner} alt="logo" />
        <h1 className="title">Más que una tienda </h1>
        <p className="descriptionBanner">Podrás interactuar con otros compradores, ganar insignias y compartir tus outfits</p>
      </div>
      <div className="step">
        <img className="logo" src={logo} alt="logo" />
        <img className="banner" src={firstBanner} alt="logo" />
        <h1 className="title">Platzi Store ha llegado </h1>
        <p className="descriptionBanner">Compra tus productos favoritos de Platzi desde la comodidad de tu casa </p>
      </div>
                
  
      
        
      </Carousel>
      <div className="buttonContainer">
        
     <Button text={"COMIENZA AHORA"} />
      </div>
    </div>
  );
}

export default HomeCarruselScreen;
