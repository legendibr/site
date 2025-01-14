import React, { useEffect } from "react";
import styled from "styled-components";
import 'boxicons';
import biologyPic from "../assets/home/images/biology.jpg";
import mathPic from "../assets/home/images/math.jpg";
import csPic from "../assets/home/images/cs.jpg";

const Div = styled.div`
    text-align: center;
    background: lightyellow;
`;

const About = styled.div`
    position: relative;
    background: rgba(255, 255, 255, 0.25);
    border: 3px solid black;
    margin-top: -20px;
    padding: 20px;
    width: 75%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
`;

const H1 = styled.h1`
    font-size: 34px;
    margin: 10px;
`;

const P = styled.p`
    color: black;
    font-size: 18px;
    margin-bottom: 10px;
    text-align: left;
    line-height: 1.5;
`;

const Subject = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 20px 0;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    &:hover, &:focus {
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
    }
`;

const SubjectTitleWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 40%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SubjectInfoWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 60%;
    padding: 10px;
`;

const LearnMore = styled.a`
    background: black;
    color: white;
    padding: 10px 15px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.3s ease;
    &:hover, &:focus {
        opacity: 0.8;
    }
`;

const BackgroundImage = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(1px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
`;

const mathBackground = {
    backgroundImage: `url(${mathPic})`
}

const biologyBackground = {
    backgroundImage: `url(${biologyPic})`
}

const csBackground = {
    backgroundImage: `url(${csPic})`
}

const TextBackground = styled.div`
    background: rgba(255, 255, 255, 0.75);
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 15px);
    height: calc(100% - 15px);
    filter: blur(1px);
    z-index: -1;
`;

const Signature = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    background: rgba(72, 65, 65, 0.75);
    color: white;
    padding: 5px;
    z-index: 10;
`

const Home = () => {
    useEffect(() => {
        document.title = "Legend IBR - Home";

        let learnMoresCopy = document.querySelectorAll('.learn-more');
        const handelResize = () => {
            const subjects = document.querySelectorAll('.subject');
            const subjectTitles = document.querySelectorAll('.subject-title');
            const subjectInfos = document.querySelectorAll('.subject-info');
            const learnMores = document.querySelectorAll('.learn-more');

            if (window.innerWidth < 768) {
                subjects.forEach(subject => {
                    subject.style.flexDirection = "column";
                    subject.style.width = "100%";
                    subject.style.margin = "25px 0";
                });
                subjectInfos.forEach(subjectInfo => {
                    subjectInfo.style.width = "100%";
                });
                learnMores.forEach(learnMore => {
                    learnMore.remove();
                });
            } else {
                subjects.forEach(subject => {
                    subject.style.flexDirection = "row";
                    subject.style.width = "80%";
                    subject.style.margin = "20px 0";
                });
                subjectInfos.forEach(subjectInfo => {
                    subjectInfo.style.width = "60%";
                });
                for (let i = 0; i < learnMoresCopy.length; i++) {
                    subjectTitles[i].appendChild(learnMoresCopy[i]);
                }
            }
        }

        window.addEventListener('resize', handelResize);
        handelResize();

        return () => {
            document.title = "Legend IBR";

            window.removeEventListener('resize', handelResize);
        }
    }, []);

    return (
        <Div>
            <About>
                <H1>About this site</H1>
                <P style={{ textAlign: "center" }}>
                    This is a site intended to teach and demonstrate some concepts of Math, Biology, and Computer Science. It is built using React and styled-components. The site is a work in progress and will be updated with more content and features in the future.
                </P>
            </About>

            <Subject style={{ background: "rgb(246, 246, 91)" }} onClick={() => window.location.href = "/math"} className="subject">
                <SubjectTitleWrapper className="subject-title">
                    <H1>Math</H1>
                    <LearnMore href="math" className="learn-more">Learn more</LearnMore>
                </SubjectTitleWrapper>
                <SubjectInfoWrapper className="subject-info">
                    <BackgroundImage style={mathBackground}></BackgroundImage>
                    <TextBackground></TextBackground>
                    <P>
                        Math is the science and study of quality, structure, space, and change. Mathematicians seek out patterns, formulate new conjectures, and establish truth by rigorous deduction from appropriately chosen axioms and definitions.
                    </P>
                </SubjectInfoWrapper>
            </Subject>
            <Subject style={{ background: "rgb(91, 246, 91)" }} onClick={() => window.location.href = "/biology"} className="subject">
                <SubjectTitleWrapper className="subject-title">
                    <H1>Biology</H1>
                    <LearnMore href="biology" className="learn-more">Learn more</LearnMore>
                </SubjectTitleWrapper>
                <SubjectInfoWrapper className="subject-info">
                    <BackgroundImage style={biologyBackground}></BackgroundImage>
                    <TextBackground></TextBackground>
                    <P>
                        Biology is the study of life and living organisms, from one-celled creatures to the most complex living organism of all — the human being. Biology includes the study of genes and cells that give living things their special characteristics.
                    </P>
                </SubjectInfoWrapper>
            </Subject>
            <Subject style={{ background: "rgb(138, 138, 255)" }} onClick={() => window.location.href = "/cs"} className="subject">
                <SubjectTitleWrapper className="subject-title">
                    <H1>Computer Science</H1>
                    <LearnMore href="cs" className="learn-more">Learn more</LearnMore>
                </SubjectTitleWrapper>
                <SubjectInfoWrapper className="subject-info">
                    <BackgroundImage style={csBackground}></BackgroundImage>
                    <TextBackground></TextBackground>
                    <P>
                        Computer Science is the study of computers and computational systems. Unlike electrical and computer engineers, computer scientists deal mostly with software and software systems; this includes their theory, design, development, and application.
                    </P>
                </SubjectInfoWrapper>
            </Subject>

            <Signature>Ian & Ram & Barry</Signature>
        </Div>
    );
}

export default Home;
