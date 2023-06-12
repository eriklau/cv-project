import React from "react";
import EducationInfo from "./EducationInfo";

// import input and section, text area?

export default function Education({ education, onChange, onAdd, onDelete }) {
    const educationInfos = education.map((educationInfo) => (
        <EducationInfo 
            id={educationInfo.id}
            educationInfo={educationInfo}
            onChange={onChange}
            onDelete={onDelete}
        />
    ))

    return (
        <div className="section-education">
            <h3>EDUCATION</h3>
            {educationInfos}
            <button text="Add" onClick={onAdd}>ADD</button>
        </div>
    )
}
