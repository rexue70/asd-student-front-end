import React, {Component} from 'react';
import styled from 'styled-components'
import ProfileSelect from "./ProfileSelect";
import ProfileInput from "../profile/ProfileInput";
import ProfileCard from "../profile/ProfileCard"
import {Row, Col, Grid} from 'react-bootstrap';

import Experiences from "./Experiences"

const options = {
    Gender: {
        text: 'Select your gender:',
        data: ['Male', 'Female'],
    },
    Age: {
        text: 'Select your age',
        data: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    },
    Email: {
        text: 'Input your email',
    },
    Campus: {
        text: 'Select your campus',
        data: ['Boston', 'Seattle', 'Silicon Valley'],
    },
    StartTerm: {
        text: 'Select your start term',
        data: ['Spring 2016', 'Fall 2016', 'Spring 2017', 'Fall 2017', 'Spring 2018'],
    },
    ExpectedGraduation: {
        text: 'Select your expected Graduation',
        data: ['June 2018', 'Aug 2018', 'Dec 2018'],
    },
    Major: {
        text: 'Select your major',
        data: ['Computer Science Align', 'Information System', 'Product Management'],
    },
    Degree: {
        text: 'Select your degree',
        data: ['Bachelor', 'Master', 'Phd'],
    },
    Enrollment: {
        text: 'Enrollment Student',
        data: ['Yes (active student)', 'No'],
    },

};


class Profile extends Component {

    constructor(props) {
        super(props);
        this.setProfileField = this.setProfileField.bind(this);
        this.update = this.update.bind(this);
        let studentID = 1; // Should be provided by login info

        this.state = {
            StudentID: studentID,
            Gender: undefined,
            Age: undefined,
            Email: undefined,
            Campus: undefined,
            StartTerm: undefined,
            ExpectedGraduation: undefined,
            Major: undefined,
            Degree: undefined,
            Enrollment: undefined,
        };
    }

    getStudent(studentID) {
        let API = 'http://127.0.0.1:5000/students/';
        let query;

        if (!studentID) {
            query = this.props.studentID;
        } else {
            query = studentID;
        }
        fetch(API + query)//get Req with query info
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    Gender: responseJson.Gender,
                    Age: responseJson.Age,
                    Email: responseJson.Email,
                    Campus: responseJson.Campus,
                    StartTerm: responseJson.StartTerm,
                    ExpectedGraduation: responseJson.ExpectedGraduation,
                    Major: responseJson.Major,
                    Degree: responseJson.Degree,
                    Enrollment: responseJson.Enrollment,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    putStudent(studentID) {
        let API = 'http://127.0.0.1:5000/students/';
        let _this  = this;
        let bodyContent = JSON.stringify({
            StudentID: _this.state.StudentID,
            Gender: _this.state.Gender,
            Age: _this.state.Age,
            Email: _this.state.Email,
            Campus: _this.state.Campus,
            StartTerm: _this.state.StartTerm,
            ExpectedGraduation: _this.state.ExpectedGraduation,
            Major: _this.state.Major,
            Degree: _this.state.Degree,
            Enrollment: _this.state.Enrollment,
        });
        fetch(API + studentID, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: bodyContent
        }).then((response) => {
            if (response.ok) {
                alert("Success!")
            }
        }).catch((error) => {
                console.error(error);
            });
    }


    setProfileField(field, value) {
        console.log("set", field, value);
        this.setState({
            [field]: value
        })
    }

    componentWillMount() {
        this.getStudent(this.state.StudentID);
    }

    update() {
        this.putStudent(this.state.StudentID)
    }


    render() {
        console.log("state", this.state);
        let _state = this.state;
        return (
            <div>
                <div>
                    <ProfileCard />
                    <Grid>
                        <Row className="show-grid">

                            <Col md={6}>
                                <ProfileSelect action={this.setProfileField} options={options.Gender} name={"Gender"} value={_state.Gender} />
                                <ProfileSelect action={this.setProfileField} options={options.Age} name={"Age"} value={_state.Age}/>
                                <ProfileInput action={this.setProfileField} options={options.Email} name={"Email"} value={_state.Email}/>
                                <ProfileSelect action={this.setProfileField} options={options.Campus} name={"Campus"} value={_state.Campus}/>
                            </Col>

                            <Col md={6}>
                                <ProfileSelect action={this.setProfileField} options={options.StartTerm} name={"StartTerm"} value={_state.StartTerm}/>
                                <ProfileSelect action={this.setProfileField} options={options.ExpectedGraduation} name={"ExpectedGraduation"} value={_state.ExpectedGraduation}/>
                                <ProfileSelect action={this.setProfileField} options={options.Major} name={"Major"} value={_state.Major}/>
                                <ProfileSelect action={this.setProfileField} options={options.Degree} name={"Degree"} value={_state.Degree}/>
                                <ProfileSelect action={this.setProfileField} options={options.Enrollment} name={"Enrollment"} value={_state.Enrollment}/>
                            </Col>

                        </Row>
                    </Grid>
                    <Experiences/>
                    <UpdateButton onClick={this.update}>Update</UpdateButton>
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

const UpdateButton = styled.button`
    margin-right: 35%;
    margin-top: 50px;
    margin-bottom: 50px;
    float: right;
    width:50%;
    table-layout: fixed;
    height:30px;
    background: pink;
    border-radius: 30px;
    `

const center = styled.div`
    margin: auto;
    width: 50%;
    border: 3px solid green;
    padding: 10px;
}`

export default Profile
