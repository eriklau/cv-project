import React from "react";

export default function ExperienceInfo({ experienceInfo, id, onChange, onDelete }) { 

    return (
        <div className="section">
            
            <input // INPUTS NEED onChange, AND value
                type="text"
                placeholder="Company Name"
                name="companyName"
                value={experienceInfo.companyName}
                onChange={(e) => onChange(e, id)}
            />
            <input
                type="text"
                placeholder="Job Position"
                name="jobPosition"
                value={experienceInfo.jobPostion}
                onChange={(e) => onChange(e, id)}
            />

            <input
                type="text"
                placeholder="From"
                name="from"
                value={experienceInfo.from}
                onChange={(e) => onChange(e, id)}
            />
            <input
                type="text"
                placeholder="To"
                name="to"
                value={experienceInfo.to}
                onChange={(e) => onChange(e, id)}
            />

            <textarea
                type="text"
                placeholder="Description"
                name="jobDescription"
                value={experienceInfo.jobDescription}
                onChange={(e) => onChange(e, id)}
            />

            <button text="DELETE" onClick={() => onDelete(id)}>DELETE</button>
        </div>
    )
}