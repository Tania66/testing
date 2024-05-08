import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { App } from "./components/App";
import { persistor, store } from "./redux/store";
import { ModalProvider } from "./context/ModalContext/ModalContext";
import { GlobalStyle } from "./styles/globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/testing">
          <ModalProvider>
            <GlobalStyle />
            <App />
          </ModalProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
