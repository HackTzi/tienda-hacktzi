import React from "react";

import './sass/UserInfo.scss'

function UserInfo(props) {
  return (
    <React.Fragment>
      <section id="profileinfo">
          <img className="profileinfo__img--avatar" src={props.avatar} alt="Avatar del Perfil"/>
          <img className="profileinfo__img--country" src={props.country} alt="País del Usuario"/>
          <p className="profileinfo__txt--name">{props.name}</p>
          <p className="profileinfo__txt--level">{props.level}</p>
          <p className="profileinfo__txt--intro">{props.intro}</p>
      </section>
    </React.Fragment>
  );
}

export default UserInfo;
