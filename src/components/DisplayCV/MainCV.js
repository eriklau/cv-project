import React from "react";
import styled from "styled-components";
import EducationCV from "./EducationCV";
import ExperienceCV from "./ExperienceCV";
import ProjectsCV from "./ProjectsCV";
import SkillsCV from "./SkillsCV";


export default function MainCV({ education, experience, projects, skills }) {

    const educationInfos = education.map((educationInfo) => (
        <EducationCV key={educationInfo.id} educationInfo={educationInfo} />
    ));
    

    const experienceInfos = experience.map((experienceInfo) => (
        <ExperienceCV key={experienceInfo.id} experienceInfo={experienceInfo} />
    ));

    const projectsInfos = projects.map((projectsInfo) => (
        <ProjectsCV key={projectsInfo.id} projectsInfo={projectsInfo} />
    ));

    const skillsInfos = skills.map((skillsInfo) => (
        <SkillsCV key={skillsInfo.id} skillsInfo={skillsInfo} />
    ));

    return (
        <MainCVContainer>

            <div className="education-cv">
                <h2 className="display-title">EDUCATION</h2>
                {educationInfos}
            </div>

            <div className="experience-cv">
                <h2 className="display-title">EXPERIENCE</h2>
                {experienceInfos}
            </div>

            <div className="projects-cv">
                <h2 className="display-title">PROJECTS</h2>
                {projectsInfos}
            </div>

            <div className="skills-cv">
                <h2 className="display-title">SKILLS</h2>  
                {skillsInfos}
            </div>

        </MainCVContainer>
    );
};

// style divs/wrappers here
const MainCVContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 263mm;
    width: 200mm;
    padding: 2rem;
    padding-top: 0;
`;