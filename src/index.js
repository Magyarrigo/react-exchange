import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Footer from "./elements/Footer/Footer";
import Header from "./elements/Header/Header";
import Main from "./elements/Main/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <>
      <Header />
      <Main />
      <Footer />
    </>
  </React.StrictMode>
);

reportWebVitals();
