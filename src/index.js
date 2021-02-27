import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import 'normalize.css'
import Login from './features/login/Login';
import Profile from './features/user-profile/Profile';
import Footer from "./features/footer/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Profile />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
