import React from "react";
import "./App.css";
import {Footer, Blog,CTA,Header,Companies, NavBar, Possibility,WhatGPT,Future } from "./components";



export default function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <NavBar />
                <Header />
            </div>
            <Companies />
            <WhatGPT />
            <Future />
            <Possibility/>
            <CTA />
            <Blog />
            <Footer />
        </div>
    )

}