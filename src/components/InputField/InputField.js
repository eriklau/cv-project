import React from "react";
import styled from "styled-components";
import GeneralInfo from "./GeneralInfo"
import Education from "./Education"
import Experience from "./Experience"
import Projects from "./Projects"
import Skills from "./Skills"


export default function InputField({ cv, onChangeGeneralInfo, onChangeEducation, onChangeExperience, onChangeProjects, onChangeSkills, 
                                    onAddEducation, onDeleteEducation, onAddExperience, onDeleteExperience, onAddProjects, onDeleteProjects, onAddSkills, onDeleteSkills,
                                    onReset, onLoadExample }) { // onDownload

        console.log(cv)
        return (

            <InputFieldContainer>

                <GeneralInfo
                    generalInfo={cv.generalInfo}
                    onChange={onChangeGeneralInfo}
                />

                <Education 
                    education={cv.education}
                    onChange={onChangeEducation}
                    onAdd={onAddEducation}
                    onDelete={onDeleteEducation}
                />

                <Experience 
                   experience={cv.experience}
                   onChange={onChangeExperience}
                   onAdd={onAddExperience}
                   onDelete={onDeleteExperience} 
                />

                <Projects 
                    projects={cv.projects}
                    onChange={onChangeProjects}
                    onAdd={onAddProjects}
                    onDelete={onDeleteProjects}
                />

                <Skills 
                    skills={cv.skills}
                    onChange={onChangeSkills}
                    onAdd={onAddSkills}
                    onDelete={onDeleteSkills}
                />

                <button text="RESET" onClick={onReset}>RESET</button> 
                <button text="LOAD EXAMPLE RESUME" onClick={onLoadExample}>LOAD EXAMPLE RESUME</button>
                {/* <button text="DOWNLOAD PDF" onClick={onDownload}>DOWNLOAD PDF</button> */}

            </InputFieldContainer>
        )
}

// style form wrapper down here?
const InputFieldContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 216mm;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;