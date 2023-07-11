import React from "react";
import './app.scss';
import Router from "./router/Router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="App">
        <Header />
          <Router />
        <Footer />
    </div>
  );
}


