import React from "react";
import "./Header.css";
import people from "../../assets/people.png"
import aiImage from "../../assets/ai.png"

export default function Header() {
    return (
        <div className="header">
            <div className="header-content">
            <h1 className="gradient-text">Let's Build Something amazing with GPT-3 OpenAI</h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing.
                Not thoughts all exercise blessing.
                Indulgence way everything joy alteration boisterous the attachment.
                Party we years to order allow asked of.</p>
                <div className="header-content-started">
                    <input type="text" placeholder="Your Email Address" />
                    <button>Get Started</button>
                </div>
                <div className="header-content-review">
                    <img src={people} />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="header-image">
                <img src={aiImage} alt="ai-image"/>
            </div>
        </div>
    )
}