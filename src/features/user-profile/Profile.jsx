import React from "react";
import EditButton from "./components/EditButton";
import UserInfo from "./components/UserInfo";
import SwagCard from "./components/SwagCard";
import Badge from "./components/Badge";

import "./sass/Profile.scss";

import cover from "./assets/user-cover.svg";
import country from "./assets/user-country.svg";
import avatar from "./assets/user-avatar.svg";

import swagPhoto from "./assets/swag-photo.svg";
import badge from "./assets/badge-groot.svg";

function Profile() {

  function handleTab(e) {
    let activeTab = document.getElementsByClassName('profile__tabs--active');
    let activePanel = document.getElementsByClassName('profile__cards'); 
    let swags = document.getElementById('swag-panel');
    let badges = document.getElementById('badge-panel');
    let clickedTab = e.currentTarget;

        activeTab[0].classList.add('profile__tabs');
        activeTab[0].classList.remove('profile__tabs--active');
        clickedTab.classList.add('profile__tabs--active');
        clickedTab.classList.remove('profile__tabs');
        
        activePanel[0].classList.add('profile__cards--hidden');
        activePanel[0].classList.remove('profile__cards');
        
        if (clickedTab.id === 'tab-swags') {
          swags.classList.add('profile__cards');
          swags.classList.remove('profile__cards--hidden');
        }

        if (clickedTab.id === 'tab-badges') {
          badges.classList.add('profile__cards');
          badges.classList.remove('profile__cards--hidden');
        }
  }

  return (
    <div className="profile">
        <img className="profile__cover" src={cover} alt="Imagen Cover del Perfil"/>
        <div className="profile__middle">
          <UserInfo avatar={avatar} country={country} name={"Steve Calderón"} level= {"Nivel 1"} intro={"Preséntate con los HackTziSwaggers..."}/>
          <EditButton text={"Editar Perfil"} />
        </div>
        <div className="profile__tabs">
          <button id="tab-swags" className="profile__tabs--active" onClick={handleTab}>Swag</button>
          <button id="tab-badges" className="profile__tabs" onClick={handleTab}>Insignias</button>
        </div>
        <div id="swag-panel" className="profile__cards">
          <SwagCard photo={swagPhoto} title={'Rockeando mi cam...'} user={'Steve'} likes={'14'}/>
        </div>
        <div id="badge-panel" className="profile__cards--hidden">
          <Badge badge={badge} title={'Babybuyer'} subtitle={'Desbloqueada el 01 de Febrero'}/>
        </div>
        

    </div>
  );
}

export default Profile;
