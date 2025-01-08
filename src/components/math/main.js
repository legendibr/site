import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import 'boxicons';
import algebraBg from "../../assets/math/home/images/algebra.jpg";
import trigonometryBg from "../../assets/math/home/images/trigonometry.jpg";
import geometryBg from "../../assets/math/home/images/geometry.jpg";

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

const algebraBgStyle = {
    backgroundImage: `url(${algebraBg})`
}

const trigonometryBgStyle = {
    backgroundImage: `url(${trigonometryBg})`
}

const geometryBgStyle = {
    backgroundImage: `url(${geometryBg})`
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

const Math = () => {
    useEffect(() => {
        document.title = "Legend IBR - Math";

        return () => {
            document.title = "Legend IBR";
        }
    }, []);

    return (
        <Div className="math-main">
            <H1 className="title">Math</H1>

            <Unit className="unit">
                <div onClick={() => {window.location.href = "/math/algebra"}}>
                    <UnitBackground style={algebraBgStyle}></UnitBackground>
                    <UnitTitle>Algebra</UnitTitle>
                    <Description>
                        Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols. 
                        In elementary algebra, those symbols (today written as Latin and Greek letters) represent quantities without fixed values, known as variables. 
                        This is useful for several reasons. 
                    </Description>
                </div>
                <Option onClick={() => {window.location.href = "/math/algebra/learn"}}>Start learning <box-icon name='right-arrow-alt' color='#ffffff'></box-icon></Option>
                <Option onClick={() => {window.location.href = "/math/algebra/practice"}}>Practice <box-icon name='right-arrow-alt' color='#ffffff'></box-icon></Option>
            </Unit>
            <Unit className="unit">
                <div onClick={() => {window.location.href = "/math/trigonometry"}}>
                    <UnitBackground style={trigonometryBgStyle}></UnitBackground>
                    <UnitTitle>Trigonometry</UnitTitle>
                    <Description>
                        Trigonometry is a branch of mathematics that studies relationships between side lengths and angles of triangles. 
                        The field emerged in the Hellenistic world during the 3rd century BC from applications of geometry to astronomical studies.
                    </Description>
                </div>
                <Option onClick={() => {window.location.href = "/math/trigonometry/learn"}}>Start learning <box-icon name='right-arrow-alt' color='#ffffff'></box-icon></Option>
                <Option onClick={() => {window.location.href = "/math/trigonometry/practice"}}>Practice <box-icon name='right-arrow-alt' color='#ffffff'></box-icon></Option>
            </Unit>
            <Unit className="unit">
                <div onClick={() => {window.location.href = "/math/geometry"}}>
                    <UnitBackground style={geometryBgStyle}></UnitBackground>
                    <UnitTitle>Geometry</UnitTitle>
                    <Description>
                        Geometry (from the Ancient Greek: γεωμετρία; geo- "earth", -metron "measurement") is, with arithmetic, one of the oldest branches of mathematics. 
                    </Description>
                </div>
                <Option onClick={() => {window.location.href = "/math/geometry/learn"}}>Start learning <box-icon name='right-arrow-alt' color='#ffffff'></box-icon></Option>
                <Option onClick={() => {window.location.href = "/math/geometry/practice"}}>Practice <box-icon name='right-arrow-alt' color='#ffffff'></box-icon></Option>
            </Unit>

            <Outlet />
        </Div>
    )
}

export default Math;
