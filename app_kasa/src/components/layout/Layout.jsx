import React from "react";
import './layout.scss';
import Header from "../header/Header";

export default function Layout ({children}){
    return (
    <div className="container">
        <Header />
        <main>
            {children}
        </main>
    </div>)
}