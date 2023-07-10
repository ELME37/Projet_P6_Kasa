import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Router from "./router/Router";


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router />
      </div>
    </BrowserRouter>
  );
}

