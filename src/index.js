import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/users_reducer";

import "./reset.css";

const container = document.getElementById("root");
const root = createRoot(container);
const store = createStore(reducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
