import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";

const rootEl = document.getElementById("root");

const renderApp = (App) => {
  ReactDOM.render( <App/>, rootEl );
};

renderApp(App);
