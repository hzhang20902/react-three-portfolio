import React from "react";
import styled from "styled-components";

const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-coler: #1756dd81;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7%;
    
`;

const Logo = styled.div`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 55px;
`;

const Slogan = styled.h4`
margin: 0;
color: #fff;
font-weight: 700;
font-size: 30px;
margin-top: 1em;
`

export function TopSection() {
    return <TopSectionContainer>
        <Logo>
            House of the Rising Buns
        </Logo>
        <Slogan>
         
        </Slogan>
        
    </TopSectionContainer>

}