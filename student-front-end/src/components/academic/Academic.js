import React, {Component} from 'react';
import styled from 'styled-components';
import AcademicSelect from "./AcademicSelect";
import AcademicSemester from "./AcademicSemester";
import { Grid, Row, Col, css } from 'react-bootstrap';


const options = {
    semester: {
        text: 'Select By Term',
        data: ['Fall 2013 Semester', 'Spring 2014 Semester', 'Summer 2014 Semester', 'Summer 2014 Semester',
            'Fall 2014 Semester', 'Spring 2015 Semester', 'Summer 2015 Semester', 'Fall 2015 Semester',
            'Spring 2016 Semester', 'Summer 2016 Semester', 'Fall 2016 Semester', 'Spring 2017 Semester',
            'Summer 2017 Semester', 'Fall 2017 Semester', 'Spring 2018 Semester'],
    },
    course: {
        text: 'Select By Course',
        data: ['Programming Design Paradigm', 'Fundamentals of Computer Science', 'Discrete Structures',
            'Computer System/Algorithms', 'Object Oriented Design/Java Programming', 'Algorithms',
            'Computer Systems', 'Mobile Development', 'Managing Software Development', 'Advanced Software Development'],
    },
    company: {
        text: 'Select By Company',
        data: ['Amazon', 'Facebook', 'Google', 'Apple', 'Zillow', 'Oracle', 'PocketGem', 'Bloomberg'],
    }
};

class Academic extends Component {

    render() {
        return (
            <div>
                <AcademicSemester/>
                <AcademicSelect options={options.semester}/>
                <Divider1></Divider1>

                <div style={{marginBottom: "2%"}}>
                    <SubTitle>Find My Peers</SubTitle>
                    <Grid>
                        <Row>
                            <Col md={8}>
                                <AcademicSelect options={options.course}/>
                            </Col>

                            <Col md={4}>
                                <AcademicSelect options={options.company}/>
                            </Col>
                        </Row>
                    </Grid>
                    <br/>
                    <button className="btn-prim" style={{marginLeft: "40%"}}>Find Peers</button>
                </div>
            </div>
        )
    }
}

const FormCss = styled.div`
    margin: auto;
    display: table-cell;
    float:right;
    margin-right: 25%;
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

export default Academic