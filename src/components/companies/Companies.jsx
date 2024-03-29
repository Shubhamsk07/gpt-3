import React from "react";
import "./Companies.css";
import Google from "../../assets/google.png";
import Dropbox from "../../assets/dropbox.png";
import Atlassian from "../../assets/atlassian.png";
import Slack from "../../assets/slack.png";
import Shopify from "../../assets/shopify.png";


export default function Companies() {
    return (
        <div className="Companies">
            <div>
                <img src={Google} alt="google" />
            </div>
            <div>
                <img src={Slack} alt="slack" />
            </div>
            <div>
                <img src={Atlassian} alt="atlassian" />
            </div>
            <div>
                <img src={Dropbox} alt="dropbox" />
            </div>
            <div>
                <img src={Shopify} alt="Shopify" />
            </div>

        </div>
    )
}
