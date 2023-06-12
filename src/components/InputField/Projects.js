import React from "react";
import ProjectsInfo from "./ProjectsInfo";

export default function Projects({ projects, onChange, onAdd, onDelete }) {
    const projectInfos = projects.map((projectsInfo) => (
        <ProjectsInfo 
            projects={projectsInfo}
            id={projectsInfo.id}
            onChange={onChange}
            onDelete={onDelete}
        />
    ))

    return (
        <div className="section-projects">
            <h3>PROJECTS</h3>
            {projectInfos}
            <button text="Add" onClick={onAdd}>ADD</button>
        </div>
    )
}