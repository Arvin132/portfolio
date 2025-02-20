import React from "react";
import Markdown from 'react-markdown';
import "./projectItem.css";
import rehypeRaw from 'rehype-raw'

function ProjectItem(props: {name: string, content: string }) {
    return(
        <div className="project__item">
            <div className="project__item__header">
                {props.name}
            </div>
            <div className="project__item__content">
                <Markdown rehypePlugins={[rehypeRaw]}>
                    {props.content}
                </Markdown>
            </div>
        </div>
    )
}


export default ProjectItem;