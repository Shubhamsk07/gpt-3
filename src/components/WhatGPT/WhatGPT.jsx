import React from "react";
import Feature from "../features/Feature";
import "./WhatGPT.css"
export default function WhatGPT() {
    return (
        <div className="whatgpt section__margin" id="gpt3">
            <div className="whatgpt-features">
                <Feature heading={"What is GPT-3"} content={"We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."} />
            </div>
            <div className="whatgpt-heading ">
                <h1 className="gradient-text">
                    The possibilities are beyond your imagination
                </h1>
                <p>Explore The Library</p>
            </div>
            <div className="whatgpt-container">
                <Feature heading="Chatbots" content="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
                <Feature heading="Knowledgebase" content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                <Feature heading="Education" content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            </div>
        </div>)
}