import React from "react";

import './sass/Avatar.scss'

function Avatar(props) {
  return (
    <React.Fragment>
      <img className="profile__info" src={props.avatar} alt="Avatar del Perfil"/>
      <img src={props.country} alt="País del Usuario"/>
    </React.Fragment>
  );
}

export default Avatar;
