import React, {Component} from 'react';
import academic_background from '../../images/academic.png';
import coop_background from '../../images/background.png';
import styled from 'styled-components'
import { css } from 'react-bootstrap';

class AcademicSemester extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div style={{backgroundImage: "url(" + coop_background + ")", backgroundPosition: "center", height: "700px"}}>
                    <Title>Academic</Title>
                </div>
                <Divider1></Divider1>

                <SubTitle>My Academic Progress</SubTitle>
                <SubTitle1>ALIGN BRIDGE COURSES</SubTitle1>
                <ul>
                    <List>Fundamentals of Computer Science</List>
                    <List>Discrete Structures</List>
                    <List>Computer System/Algorithms</List>
                    <List>Object Oriented Design/Java Programming</List>

                </ul>
                <SubTitle1>COUR COURSES</SubTitle1>
                <ul>
                    <List>Algorithms</List>
                    <List>Computer Science</List>
                    <List>Managing Software Development</List>
                    <List>Advanced Software Development</List>
                </ul>
                <Divider1></Divider1>

                <SubTitle>My GPA</SubTitle>
                <SubTitle1>Cumulative GPA</SubTitle1>
                <Text>3.83</Text>
                <SubTitle1>Term GPA</SubTitle1>
                <br/>
            </div>
        )
    }
}

const Title = styled.h1`
    font-family: 'Khand', sans-serif;
    font-weight: 700;
    font-size: 16em;
    color: #e78885;
    margin-left: auto;
    text-align: center;
    padding-top: 20%;
    `
const Divider = styled.hr`
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
    margin-top: 50px;
    margin-bottom: 20px;
    `
const Divider1 = styled.hr`
    border: 0;
    height: 12px;
    box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);
    margin-top: 40px;
    `
const SubTitle = styled.h3`
    font-family: 'Khand', sans-serif;
    font-size: 4em;
    font-weight: 400;
    margin-left: auto;
    text-align: center;
    color: #5d5449;
    `
const SubTitle1 = styled.h5`
    font-family: 'Khand', sans-serif;
    font-size: 2em;
    font-weight: 400;
    color: #e78885;
    `
const List = styled.li`
    font-family: "Helvetica Neue";
    font-size: 2em;
    font-weight: 100;
    color: #8c8c8c;
    `
const Text = styled.p`
    font-family: "Helvetica Neue";
    font-size: 2em;
    font-weight: 100;
    color: #8c8c8c;
    `

export default AcademicSemester
