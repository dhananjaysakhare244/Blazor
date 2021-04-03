import React from "react";
import ReactDom from "react-dom";
import Main from "./components/Main";
import "./styles/stylesheet.css";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./redux/reducer";

const store = createStore(rootReducer);

ReactDom.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);
