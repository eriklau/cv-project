import React from "react";

export default function ProjectsInfo({ projects, id, onChange, onDelete }) {
    console.log('helo')
    console.log(projects)
    return (
        
        <div className="section">
            
            <input 
                type="text"
                placeholder="Project Name"
                name="projectName"
                value={projects.projectName}
                onChange={(e) => onChange(e, id)}
            />
            <input
                type="text"
                placeholder="Skills/Technologies Used"
                name="skillsUsed"
                value={projects.skillsUsed}
                onChange={(e) => onChange(e, id)}
            />

            <textarea
                type="text"
                placeholder="Project Description"
                name="projectDescription"
                value={projects.projectDescription}
                onChange={(e) => onChange(e, id)}
            />

            <button text="DELETE" onClick={() => onDelete(id)}>DELETE</button>
        </div>
    )
}