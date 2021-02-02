import React from "react";

import './sass/Button.scss'

function Button(props) {
  return (
    <React.Fragment>
      <button type="button" className="btn">
        <p>{props.text}</p>
      </button>
    </React.Fragment>
  );
}

export default Button;
