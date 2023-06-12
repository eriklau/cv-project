import React from 'react'
import styled from 'styled-components'


export default function EducationCV({ educationInfo }) {
  return (
    <EducationInfo>
      <div className='section-title-display'>
        <h3>{educationInfo.universityName}</h3>
        <div className='period'>
          {educationInfo.from} - {educationInfo.to}
        </div>
      </div>
      <p className='info-blocks'>{educationInfo.degree}, {educationInfo.subject}</p>

    </EducationInfo>

  )
}

// style here
const EducationInfo = styled.div`
  display: flex;
  flex-direction: column;
`