import React from "react";
import styled from "styled-components";
import HeaderCV from "./HeaderCV";
import MainCV from "./MainCV";

export default function DisplayCV({ cv }) {

    return (
        <DisplayCVContainer>

            <HeaderCV 
                generalInfo={cv.generalInfo}
            /> 

            <MainCV 
                education={cv.education}
                experience={cv.experience}
                projects={cv.projects}
                skills={cv.skills}
            />
            
        </DisplayCVContainer>
    )
}

// style wrapper down here?
const DisplayCVContainer = styled.div`
    background-color: white;
    width: 216mm;
    height: 279mm;
    display: grid;
    grid-template-columns: 150mm 60mm;
    grid-template-rows: 35mm 262mm;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
