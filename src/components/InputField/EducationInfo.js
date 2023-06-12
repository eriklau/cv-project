import React from "react";

export default function EducationInfo({ educationInfo, id, onChange, onDelete }) { // , onChange ?

    return (
        
        // <Section /> that has the title as Education and wraps all input fields inside, can edit title name
        <div className="section">
            
            <input // INPUTS NEED onChange, AND value
                type="text"
                placeholder="University/College Name"
                name="universityName"
                value={educationInfo.universityName}
                onChange={(e) => onChange(e, id)}
            />
            <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={educationInfo.subject}
                onChange={(e) => onChange(e, id)}
            />
            <input
                type="text"
                placeholder="Degree, Ex. Bachelor of Science"
                name="degree"
                value={educationInfo.degree}
                onChange={(e) => onChange(e, id)}
            />

            <input
                type="text"
                placeholder="From"
                name="from"
                value={educationInfo.from}
                onChange={(e) => onChange(e, id)}
            />
            <input
                type="text"
                placeholder="To"
                name="to"
                value={educationInfo.to}
                onChange={(e) => onChange(e, id)}
            />
            <button text="DELETE" onClick={() => onDelete(id)}>DELETE</button>
        </div>
    )
}