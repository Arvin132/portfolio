import React from "react";
import { NavLink } from "react-router-dom";
import "./blogElement.css";

interface BlogElementParams {
    id: number
    header: string,
    desc: string
}

const BlogElement = ({ id, header, desc } : BlogElementParams) => {
    return (
        <NavLink to={`/blogs/${id}`}  className="blogelement__container">
            <div>
                <h1 className="blogelement__header">
                    {header}
                </h1>
                <p className="blogelement__text">
                    {desc.slice(0, 100) + "..."}
                </p>
            </div>
        </NavLink>
    )
}


export default BlogElement;