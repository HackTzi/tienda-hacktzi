import React from "react";

import './sass/Badge.scss'

function Badge(props) {
  return (
    <React.Fragment>
      <section className="profileBadge">
          <img className="profileBadge__img" src={props.badge} alt="Badge del Perfil"/>
          <div className="profileBadge__details">
            <p className="profileBadge__txt--title">{props.title}</p>
            <p className="profileBadge__txt--subtitle">{props.subtitle}</p>
          </div>
      </section>
    </React.Fragment>
  );
}

export default Badge;
