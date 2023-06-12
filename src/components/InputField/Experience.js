import React from "react";
import ExperienceInfo from "./ExperienceInfo";

// import input and section, text area?

export default function Experience({ experience, onChange, onAdd, onDelete }) { // , onChange ?
    const experienceInfos = experience.map((experienceInfo) => (
        <ExperienceInfo 
            id={experienceInfo.id}
            experienceInfo={experienceInfo}
            onChange={onChange}
            onDelete={onDelete}
        />
    ))
    return (
        <div className="section-experience">
            <h3>EXPERIENCE</h3>
            {experienceInfos}
            <button text="Add" onClick={onAdd}>ADD</button>
        </div>
    )
}