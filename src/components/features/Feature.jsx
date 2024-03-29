import React from "react";
import "./Feature.css"
export default function Feature(props) {
    return (
        <div className="feature-container__feature">

            <div className="features-container__feature-title">
                < div />
                <h1>{props.heading}</h1>
            </div>

            <div className="feature-container_feature-text">
                <p>{props.content}</p>
            </div>
        </div>
    )
}