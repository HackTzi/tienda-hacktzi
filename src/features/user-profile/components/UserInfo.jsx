import React from "react";

import './sass/UserInfo.scss'

function UserInfo(props) {
  return (
    <React.Fragment>
      <section id="profileinfo">
          <img className="profileinfo__img--avatar" src={props.avatar} alt="Avatar del Perfil"/>
          <img className="profileinfo__img--country" src={props.country} alt="País del Usuario"/>
          <p className="profileinfo__txt--name">{props.name}</p>
          <div className="profileinfo__progress">
            <progress value="75" max="100"></progress>
            <p className="profileinfo__txt--level">{props.level}</p>
          </div>
          <p className="profileinfo__txt--intro">{props.intro}</p>
      </section>
    </React.Fragment>
  );
}

export default UserInfo;
