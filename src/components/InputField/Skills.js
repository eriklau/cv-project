import React from "react";
import SkillsInfo from "./SkillsInfo";

// import input and section, text area?

export default function Skills({ skills, onChange, onAdd, onDelete }) {
    const skillsInfos = skills.map((skillsInfo) => (
        <SkillsInfo 
            id={skillsInfo.id}
            skills={skillsInfo}
            onChange={onChange}
            onDelete={onDelete}
        />
    ))
    return (
        <div className="section-skills">
            <h3>SKILLS</h3>
            {skillsInfos}
            <button text="Add" onClick={onAdd}>ADD</button>
        </div>
    )
}