import React from "react";

import './sass/SwagCard.scss'

import heart from "../assets/heart.svg";

function SwagCard(props) {
  return (
    <React.Fragment>
      <section className="profileSwag">
          <img className="profileSwag__img--photo" src={props.photo} alt="Foto del Swag"/>
          <p className="profileSwag__txt--title">{props.title}</p>
          <div className="profileSwag__details">
            <p className="profileSwag__txt--small">{props.user}</p>
            <img className="profileSwag__img--heart" src={heart} alt="Corazon Likes"/>
            <p className="profileSwag__txt--small">{props.likes}</p>
          </div>
          
            
      </section>
    </React.Fragment>
  );
}

export default SwagCard;
