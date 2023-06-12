import React from "react";
import styled from "styled-components";


export default function HeaderCV({ generalInfo }) {
  return (
    <HeaderContainer>
      <h1 style={headerTop}>{generalInfo.firstName} {generalInfo.lastName}</h1>
      <p style={headerBottom}>{generalInfo.email}  {generalInfo.phoneNumber}  {generalInfo.github}  {generalInfo.linkedin}</p>
    </HeaderContainer>
  );
};

// style
const HeaderContainer = styled.header`
  color: black;
  background-color: white;
  border-bottom: solid thin rgb(214, 214, 214, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: span 3;
  padding: 1rem;
`;

const headerTop = {
  marginTop: 0,
  marginBottom: 0,
}

const headerBottom = {
  marginTop: 0,
}
