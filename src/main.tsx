import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/views/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";
import SocketProvider from "./components/SocketProvider";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <SocketProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </SocketProvider>
);
