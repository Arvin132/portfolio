import React from "react";
import { BlogArticle, Footer } from "../../components";
import "./blogpage.css";


const Blogpage = () => {
    const  id = 132

    return (
        <div className="blog__container">
            <BlogArticle id={id} />
            <Footer />
        </div>
    )
}

export default Blogpage;