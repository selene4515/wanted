import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";

import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const store = createStore(rootReducer, devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop></ScrollToTop>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
