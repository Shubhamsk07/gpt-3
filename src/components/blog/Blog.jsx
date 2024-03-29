import React from "react";
import "./blog.css";
import Article from "../article/Article";
import { blog01,blog02,blog03,blog04,blog05 } from "./imports";

export default function Blog() {
    return (
        <div className="blog section__margin">
            <div className="blog-heading ">
                <h1 className="gradient__text">A lot is happening,<br />
                    We are blogging about it.</h1>
            </div>
            <div className="blog-container">
                <div className="blog-container__big">
                    <Article img={blog01} date={"Sep 26, 2021"} heading={"GPT-3 and Open  AI is the future. Let us explore how it is?"} />
                </div>
                <div className="blog-container__small">
                <Article img={blog02} date={"Sep 26, 2021"} heading={"GPT-3 and Open  AI is the future. Let us explore how it is?"} />
                <Article img={blog03} date={"Sep 26, 2021"} heading={"GPT-3 and Open  AI is the future. Let us explore how it is?"} />
                <Article img={blog04} date={"Sep 26, 2021"} heading={"GPT-3 and Open  AI is the future. Let us explore how it is?"} />
                <Article img={blog05} date={"Sep 26, 2021"} heading={"GPT-3 and Open  AI is the future. Let us explore how it is?"} />
                </div>
            </div>
        </div>
    )
}