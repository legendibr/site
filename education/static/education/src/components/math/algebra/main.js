import React, { useEffect } from "react";
import { Outlet, Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import 'boxicons';
import learnBg from "../../../assets/math/algebra/images/learn.jpg";
import practiceBg from "../../../assets/math/algebra/images/practice.jpg";
import { use } from "react";

const Div = styled.div`
    width: 100%;
    text-align: center;
`;

const Method = styled.div`
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

const MethodBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(5px);
    z-index: -1;
`;

const MethodTitle = styled.div`
    display: block;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 5px;
    font-size: 24px;
    font-weight: bold;
`;

const Description = styled.div`
    display: block;
    width: 100%;
    background: rgba(255, 255, 255, 0.5);
    padding: 50px;
    font-size: 25px;
    line-height: 1.5;
`;

const Algebra = () => {
    useEffect(() => {
        document.title = "Legend IBR - Algebra";

        try {
            const units = document.querySelectorAll(".unit");
            units.forEach(unit => {
                unit.style.display = "none";
            })

            document.querySelector(".title").innerHTML += " - Algebra";
        }
        catch (e) {
            console.error(e);
        }

        return () => {
            document.title = "Legend IBR";

            try {
                const units = document.querySelectorAll(".unit");
                units.forEach(unit => {
                    unit.style.display = "block";
                })

                document.querySelector(".title").innerHTML = "Math";
            }
            catch (e) {
                console.error(e);
            }
        }
    }, []);

    return (
        <Div>
            <Method onClick={() => window.location.href = "/math?unit=algebra&action=learn"} className="method">
                <MethodBackground style={{ backgroundImage: `url(${learnBg})` }} />
                <MethodTitle>Learn</MethodTitle>
                <Description>Learn algebra through varies of examples and explainations.</Description>
            </Method>
            <Method onClick={() => window.location.href = "/math?unit=algebra&action=practice"} className="method">
                <MethodBackground style={{ backgroundImage: `url(${practiceBg})` }} />
                <MethodTitle>Practice</MethodTitle>
                <Description>Practice your algebra skill by solving the given problems.</Description>
            </Method>

            <Outlet />
        </Div>
    )
};

export default Algebra;