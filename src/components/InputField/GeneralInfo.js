import React from "react";

export default function GeneralInfo({ generalInfo, onChange }) { // , onChange ?

    return (
        
        // <Section /> that has the title as General Information and wraps all input fields inside
        <div className="section">

            <h3>GENERAL INFORMATION</h3>

            <input // INPUTS NEED onChange, AND value
                type="text"
                placeholder="First Name"
                name="firstName"
                value={generalInfo.firstName}
                onChange={(e) => onChange(e)}
            />
            <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={generalInfo.lastName}
                onChange={(e) => onChange(e)}
            />

            <input
                type="text"
                placeholder="Email"
                name="email"
                value={generalInfo.email}
                onChange={(e) => onChange(e)}
            />
            <input
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={generalInfo.phoneNumber}
                onChange={(e) => onChange(e)}
            />

            <input
                type="text"
                placeholder="Github"
                name="github"
                value={generalInfo.github}
                onChange={(e) => onChange(e)}
            />
            <input
                type="text"
                placeholder="Linkedin"
                name="linkedin"
                value={generalInfo.linkedin}
                onChange={(e) => onChange(e)}
            />
        </div>
    )
}
