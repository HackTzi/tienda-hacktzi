import React from "react";

import './sass/EditButton.scss'

function EditButton(props) {
  return (
    <React.Fragment>
      <button type="button" className="profile__editbtn">
        <p>{props.text}</p>
      </button>
    </React.Fragment>
  );
}

export default EditButton;
