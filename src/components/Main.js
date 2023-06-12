import React, { useState } from "react";
import uniqid from "uniqid";

import InputField from "./InputField/InputField";
import DisplayCV from "./DisplayCV/DisplayCV";

import EmptyCV from "./Tools/EmptyCV";
import ExampleCV from "./Tools/ExampleCV";

export default function Main() {
  const [cv, setCv] = useState(EmptyCV)

  // CONTAINS ALL handleOperations
  const handleChangeGeneralInfo = (e) => {
    const { name, value } = e.target

    setCv((prevState) => ({
      ...prevState,
      generalInfo: {
        ...prevState.generalInfo,
        [name]: value,
      },
    }))
  }

  // EDUCATION
  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target

    setCv((prevState) => {
      const newEducation = prevState.education.map((educationInfo) => {
        if (educationInfo.id === id) {
          return { ...educationInfo, [name]: value }
        }
        return educationInfo
      })
      return { ...prevState, education: [...newEducation] }
    })
  }
  const handleAddEducation = () => {
    setCv((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uniqid(),
          universityName: "",
          subject: "",
          degree: "",
          from: "",
          to: "",
        },
      ],
    }))
  }
  const handleDeleteEducation = (id) => {
    setCv((prevState) => {
      const newEducation = prevState.education.filter(
        (educationInfo) => educationInfo.id !== id
      )
      return { ...prevState, education: [...newEducation] }
    })
  }

  // EXPERIENCE
  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target

    setCv((prevState) => {
      const newExperience = prevState.experience.map((experienceInfo) => {
        if (experienceInfo.id === id) {
          return { ...experienceInfo, [name]: value }
        }
        return experienceInfo
      })
      return { ...prevState, experience: [...newExperience] }
    })
  }
  const handleAddExperience = () => {
    setCv((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uniqid(),
          company: "",
          position: "",
          from: "",
          to: "",
          jobDescription: "",
        },
      ],
    }))
  }
  const handleDeleteExperience = (id) => {
    setCv((prevState) => {
      const newExperience = prevState.experience.filter(
        (experienceInfo) => experienceInfo.id !== id
      )
      return { ...prevState, experience: [...newExperience] }
    })
  }


  // PROJECTS
  const handleChangeProjects = (e, id) => {
    const { name, value } = e.target

    setCv((prevState) => {
      const newProjects = prevState.projects.map((projectsInfo) => {
        if (projectsInfo.id === id) {
          console.log({ ...projectsInfo, [name]: value })
          return { ...projectsInfo, [name]: value }
        }
        console.log(projectsInfo)
        return projectsInfo
      })
      console.log({ ...prevState, projects: [...newProjects] })
      return { ...prevState, projects: [...newProjects] }
    })
  }
  const handleAddProjects = () => {
    setCv((prevState) => ({
      ...prevState,
      projects: [
        ...prevState.projects,
        {
          id: uniqid(),
          projectName: "",
          skillsUsed: "",
          projectDescription: "",
        },
      ],
    }))
  }
  const handleDeleteProjects = (id) => {
    setCv((prevState) => {
      const newProjects = prevState.projects.filter(
        (projectsInfo) => projectsInfo.id !== id
      )
      return { ...prevState, projects: [...newProjects] }
    })
  }


  // SKILLS
  const handleChangeSkills = (e, id) => {
    const { name, value } = e.target

    setCv((prevState) => {
      const newSkills = prevState.skills.map((skillsInfo) => {
        if (skillsInfo.id === id) {
          return { ...skillsInfo, [name]: value }
        }
        return skillsInfo
      })
      return { ...prevState, skills: [...newSkills] }
    })
  }
  const handleAddSkills = () => {
    setCv((prevState) => ({
      ...prevState,
      skills: [
        ...prevState.skills,
        {
          id: uniqid(),
          skillDescription: "",
        },
      ],
    }))
  }
  const handleDeleteSkills = (id) => {
    setCv((prevState) => {
      const newSkills = prevState.skills.filter(
        (skillsInfo) => skillsInfo.id !== id
      )
      return { ...prevState, skills: [...newSkills] }
    })
  }

  // BOTTOM BUTTONS
  const handleReset = (e) => {
    setCv(EmptyCV)
  }
  const handleLoadExample = (e) => {
    setCv(ExampleCV)
  }
  // const handleDownload = (e) => {
    
  // }

  return (
    <main>
      <InputField 
        cv={cv}
        onChangeGeneralInfo={handleChangeGeneralInfo}

        onChangeEducation={handleChangeEducation}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}

        onChangeExperience={handleChangeExperience}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}

        onChangeProjects={handleChangeProjects}
        onAddProjects={handleAddProjects}
        onDeleteProjects={handleDeleteProjects}

        onChangeSkills={handleChangeSkills}
        onAddSkills={handleAddSkills}
        onDeleteSkills={handleDeleteSkills}

        onReset={handleReset}
        onLoadExample={handleLoadExample}
        // onDownload={handleDownload}
      />

      <DisplayCV cv={cv} />
    </main>

  );
};
