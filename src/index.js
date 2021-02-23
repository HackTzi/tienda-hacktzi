import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import 'normalize.css'
import Login from './features/login/Login';
import Profile from './features/user-profile/Profile';

ReactDOM.render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>,
  document.getElementById("root")
);
