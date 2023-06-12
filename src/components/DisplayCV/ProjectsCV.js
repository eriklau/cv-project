import React from 'react'
import styled from 'styled-components'

export default function ProjectsCV({ projectsInfo }) {
  return (
    <ProjectsInfo>
      <h3>{projectsInfo.projectName} | {projectsInfo.skillsUsed}</h3>
      <p className='info-blocks'>{projectsInfo.projectDescription}</p>
    </ProjectsInfo>
  )
}

// style here
const ProjectsInfo = styled.div`
  display: flex;
  flex-direction: column;
`
