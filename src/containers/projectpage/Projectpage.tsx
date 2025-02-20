import React, { useEffect, useState } from "react";
import { Header, ProjectItem } from "../../components";


import "./projectpage.css"

function ProjectPage() {
    const [projects, setProjects] = useState<{ name: string; content: string }[]>([]);
    
    useEffect(() => {
        fetch("/markdownFiles.json")
            .then(response => response.json())
            .then(data => {
                const files = data.files.map((name: string) => 
                    fetch(`/projects/${name}`)
                        .then(response => response.text())
                        .then(content => ({name, content}))
                )
                Promise.all(files)
                    .then(res => setProjects(res))
            })
            .catch(err => console.error("Error fetching project markdown files: ", err))
    }, [])
    
    return (
        <React.Fragment>
            <Header />
            <div className="project__page__container max__height">
                {projects.map((file, index) => 
                    <div key={index}>
                        <ProjectItem name={file.name} content={file.content} />
                    </div>
               )}
            </div>     
        </React.Fragment >
    )
}


export default ProjectPage;