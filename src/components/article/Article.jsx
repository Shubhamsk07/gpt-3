import React from "react";
import "./article.css";

export default function Article({img,date,heading}){
    return(
        <div className="article">
            <div className="article-image">
                <img src={img} alt=""/>
            </div>
            <div className="article-content">
                <div className="article-content__upper">
                <p className="article-content__date">{date}</p>
                <h1>{heading}</h1>
                </div>
                <div className="article-content__low">
                <p className="article-content__ending">Read Full Article</p>
                </div>
            </div>
        </div>
    )
}
