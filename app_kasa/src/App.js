import React from "react";
import './app.scss';
import Router from "./router/Router";
import Layout from "./components/layout/Layout";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Router />
      </Layout>

        <Footer />
    </div>
  );
}


