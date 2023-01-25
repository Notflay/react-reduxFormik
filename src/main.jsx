import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import App_copy from "./App_copy";
import "./index.css";
import storeAsync from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={storeAsync}>
    <App_copy />
  </Provider>
);
