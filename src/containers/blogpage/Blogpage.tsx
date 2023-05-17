import React from "react";
import { BlogArticle, Footer } from "../../components";
import "./blogpage.css";
import { useParams } from "react-router-dom";

interface paramType {
    id: number
}

const Blogpage = () => {
    const { id } = useParams<{ id: string }>();

    if (id === undefined) {
        // Handle the case where 'id' is undefined
        return <div>Loading...</div>;
    }

    const numericId = parseInt(id, 10);

    return (
        <div className="blog__container">
            <BlogArticle id={numericId} />
            <Footer />
        </div>
    )
}

export default Blogpage;