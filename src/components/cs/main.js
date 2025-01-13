import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import pythonBg from "../../assets/cs/home/images/python.jpg";
import javaBg from "../../assets/cs/home/images/java.jpg";

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
    backgroundImage: `url(${pythonBg})`
}

const trigonometryBgStyle = {
    backgroundImage: `url(${javaBg})`
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

const Cs = () => {
    useEffect(() => {
        document.title = "Legend IBR - Computer science";

        return () => {
            document.title = "Legend IBR";
        }
    }, []);

    return (
        <Div className="math-main">
            <H1 className="title">Computer science</H1>

            <Unit className="unit">
                <div onClick={() => { window.location.href = "/cs?unit=python" }}>
                    <UnitBackground style={algebraBgStyle}></UnitBackground>
                    <UnitTitle>Python</UnitTitle>
                    <Description>
                        Python is commonly used for developing websites and software, task automation, data analysis, and data visualization. Since it's relatively easy to learn, Python has been adopted by many non-programmers such as accountants and scientists, for a variety of everyday tasks, like organizing finances.
                    </Description>
                </div>
                <Option onClick={() => { window.location.href = "/cs?unit=python&action=learn" }}>Start learning <box-icon name='right-arrow-alt' color='#ffffff'></box-icon></Option>
                <Option onClick={() => { window.location.href = "/cs?unit=python&action=practice" }}>Practice <box-icon name='right-arrow-alt' color='#ffffff'></box-icon></Option>
            </Unit>
            <Unit className="unit">
                <div onClick={() => { window.location.href = "/cs?unit=java" }}>
                    <UnitBackground style={trigonometryBgStyle}></UnitBackground>
                    <UnitTitle>Java</UnitTitle>
                    <Description>
                        Java can be used to create complete applications that can run on a single computer or be distributed across servers and clients in a network. As a result, you can use it to easily build mobile applications or run on desktop applications that use different operating systems and servers, such as Linux or Windows.
                    </Description>
                </div>
                <Option onClick={() => { window.location.href = "/cs?unit=java&action=learn" }}>Start learning <box-icon name='right-arrow-alt' color='#ffffff'></box-icon></Option>
                <Option onClick={() => { window.location.href = "/cs?unit=java&action=practice" }}>Practice <box-icon name='right-arrow-alt' color='#ffffff'></box-icon></Option>
            </Unit>

            <Outlet />
        </Div>
    )
}

export default Cs;