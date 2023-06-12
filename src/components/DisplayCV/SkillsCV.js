import React from 'react'
import styled from 'styled-components'

export default function SkillsCV({ skillsInfo }) {
  return (
    <SkillsInfo>
      <p className='info-blocks'>{skillsInfo.skillDescription}</p>
    </SkillsInfo>
  )
}

// style here
const SkillsInfo = styled.div`
  display: flex;
  flex-direction: column;
`