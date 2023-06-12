import React from 'react'
import styled from 'styled-components'

export default function ExperienceCV({ experienceInfo }) {
  return (  
    <ExperienceInfo>
    <div className='section-title-display'>
      <h3>{experienceInfo.companyName} | {experienceInfo.jobPosition}</h3>
      <div className='period'>
        {experienceInfo.from} - {experienceInfo.to}
      </div>
    </div>

    <p className='info-blocks'>{experienceInfo.jobDescription}</p>
  </ExperienceInfo>
  )
}

// style here
const ExperienceInfo = styled.div`
  display: flex;
  flex-direction: column;
`
