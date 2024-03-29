import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

export default function Footer() {
    return (
        <div className="footer section__padding">
            <div className="footer-heading">
                <h3 className="gradient__text">Step into the future before others</h3>
            </div>
            <div className="footer-button">
                <button type="button">Request early access</button>
            </div>
            <div className="footer-content">
                <div className="footer-content__gpt-3">
                    <img src={logo} alt="gpt3-logo" />
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <div className="footer-content__links">
                    <h3>Links</h3>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="footer-content__company">
                    <h3>Company</h3>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="footer-content__company">
                    <h3>Get in touch</h3>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
                
            </div>
            <div className="copyright">
                    <p>© 2024 GPT-3. All rights reserved.</p>
                </div>
        </div>
    );
}
