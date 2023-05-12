import React from "react";
import "./article.css";
import { meTxt } from "./me"


const Article = () => {
    return (
        <div className="article__container">
            <p className="article__text">
                {meTxt}
            </p>
        </div>
    )
}

export default Article;