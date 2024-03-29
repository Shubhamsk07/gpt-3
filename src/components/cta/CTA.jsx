import React from "react";
import "./cta.css";

export default function CTA(){
    return(
        <div className="cta-container section__margin"> 
            <div className="cta-container__content">
                <p>Request Early Access to Get Started</p>
                <h1>Register today & start exploring the endless possiblities.</h1>
            </div>
            <div className="cta-container__button">
                <button type="button">Get Started</button>
            </div>
        </div>
    )
}