import React from "react";
import EditButton from "./components/EditButton";
import UserInfo from "./components/UserInfo";

import "./sass/Profile.scss";

import cover from "./assets/user-cover.svg";
import country from "./assets/user-country.svg";
import avatar from "./assets/user-avatar.svg";

function Profile() {
  return (
    <div className="profile">
        <img className="profile__cover" src={cover} alt="Imagen Cover del Perfil"/>
        <div className="profile__middle">
          <UserInfo avatar={avatar} country={country} name={"Steve Calderón"} level= {"Nivel 1"} intro={"Preséntate con los HackTziSwaggers..."}/>
          <EditButton text={"Editar Perfil"} />
        </div>
        <div className="profile__tabs">
          <p className="profile__tabs--active">Swag</p>
          <p className="profile__tabs--inactive">Insignias</p>
        </div>
        <div className="profile__swag">
          Swag
        </div>
        

    </div>
  );
}

export default Profile;
