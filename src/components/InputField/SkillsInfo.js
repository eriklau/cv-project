import React from "react";

export default function Skills({ skills, id, onChange, onDelete }) { 
    return (
        
        <div className="section">
            
            <textarea
                type="text"
                placeholder="Skill Description"
                name="skillDescription"
                value={skills.skillDescription}
                onChange={(e) => onChange(e, id)}
            />

            <button text="DELETE" onClick={() => onDelete(id)}>DELETE</button>
        </div>
            // input Skill Point
    )
}