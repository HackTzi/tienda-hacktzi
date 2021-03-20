import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import 'normalize.css'
import Login from './features/login/Login';
import Profile from './features/user-profile/Profile';
import Footer from "./features/home/components/Footer";
import Home from './features/home/Home'
import OnBoarding from "./features/onboarding/OnBoarding";

ReactDOM.render(
  <React.StrictMode>
    <OnBoarding/>
  </React.StrictMode>,
  document.getElementById("root")
);
