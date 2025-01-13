import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import geneAndInheritanceBg from "../../assets/biology/home/images/gene-and-inheritance.jpg";
import muscleStructureBg from "../../assets/biology/home/images/muscle-structure.jpg";

const Div = styled.div`
    text-align: center;
    background: lightyellow;
`;

const H1 = styled.h1`
    display: block;
    width: 100%;
    font-size: 40px;
    margin: 10px 0;
`;

const Unit = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    alignItems: center;
    padding: 0;
    margin: 20px auto;
    width: 60%;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    z-index: 0;
    transition: box-shadow 0.3s ease;
    &:hover, &:focus {
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
    }
`;

const UnitBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(3px);
    z-index: -1;
`;

const geneAndInheritanceBgStyle = {
    backgroundImage: `url(${geneAndInheritanceBg})`
}

const muscleStructureBgStyle = {
    backgroundImage: `url(${muscleStructureBg})`
}

const UnitTitle = styled.div`
    display: block;
    width: 100%;
    background: rgba(255, 255, 255, 0.5);
    padding: 5px;
    font-size: 24px;
    font-weight: bold;
`;

const Description = styled.div`
    display: block;
    width: 100%;
    background: rgba(255, 255, 255, 0.5);
    padding: 5px;
    font-size: 16px;
    text-align: left;
    line-height: 1.5;
`;

const Option = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.75);
    text-decoration: none;
    color: white;
    padding: 10px 15px;
    border: none;
    width: 100%;
    font-size: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    &:hover, &:focus {
        text-decoration: underline;
    }
`;

const Biology = () => {
    useEffect(() => {
        document.title = "Legend IBR - Biology";

        return () => {
            document.title = "Legend IBR";
        }
    }, []);

    return (
        <Div className="math-main">
            <H1 className="title">Biology</H1>

            <Unit className="unit">
                <div onClick={() => { window.location.href = "/biology?unit=gene-and-inheritance" }}>
                    <UnitBackground style={geneAndInheritanceBgStyle}></UnitBackground>
                    <UnitTitle>Gene & inheritance</UnitTitle>
                    <Description>
                        Each trait is determined by a 'factor' that is passed onto descendants. We now know these factors are genes. Individuals inherit one 'factor' (or gene) from each parent for each trait. A trait might not show up in an individual - but it can still be passed onto the next generation.
                    </Description>
                </div>
                <Option onClick={() => { window.location.href = "/biology?unit=gene-and-inheritance&action=learn" }}>Start learning <box-icon name='right-arrow-alt' color='#ffffff'></box-icon></Option>
                <Option onClick={() => { window.location.href = "/biology?unit=gene-and-inheritance&action=practice" }}>Practice <box-icon name='right-arrow-alt' color='#ffffff'></box-icon></Option>
            </Unit>
            <Unit className="unit">
                <div onClick={() => { window.location.href = "/biology?unit=muscle-structure" }}>
                    <UnitBackground style={muscleStructureBgStyle}></UnitBackground>
                    <UnitTitle>Muscle structures</UnitTitle>
                    <Description>
                        Each muscle is made up of groups of muscle fibers called fascicles surrounded by a connective tissue layer called perimysium. Multiple units of individual muscle fibers within each fascicle are surrounded by endomysium, a connective tissue sheath.
                    </Description>
                </div>
                <Option onClick={() => { window.location.href = "/biology?unit=muscle-structure&action=learn" }}>Start learning <box-icon name='right-arrow-alt' color='#ffffff'></box-icon></Option>
                <Option onClick={() => { window.location.href = "/biology?unit=muscle-structure&action=practice" }}>Practice <box-icon name='right-arrow-alt' color='#ffffff'></box-icon></Option>
            </Unit>

            <Outlet />
        </Div>
    )
}

export default Biology;