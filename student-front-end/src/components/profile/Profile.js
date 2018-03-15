import React, {Component} from 'react';
import styled from 'styled-components'
import ProfileSelect from "./ProfileSelect";
import ProfileInput from "../profile/ProfileInput";
import ProfileCard from "../profile/ProfileCard"
import {Row, Col, Grid, css, Modal, Button, InputGroup, ControlLabel, FormGroup, FormControl} from 'react-bootstrap';
import profile_pic from '../../images/Profile_example_pic.png';
import Experiences from "./Experiences"
import pen from '../../images/edit_pen.png'

const options = {
    gender: {
        text: 'Select your gender:',
        data: ['Male', 'Female'],
    },
    age: {
        text: 'Select your age',
        data: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    },
    email: {
        text: 'Input your email',
    },
    campus: {
        text: 'Select your campus',
        data: ['Boston', 'Seattle', 'Silicon Valley'],
    },
    startterm: {
        text: 'Select your start term',
        data: ['Spring 2016', 'Fall 2016', 'Spring 2017', 'Fall 2017', 'Spring 2018'],
    },
    expectedgraduation: {
        text: 'Select expected Graduation',
        data: ['June 2018', 'Aug 2018', 'Dec 2018'],
    },
    major: {
        text: 'Select your major',
        data: ['Computer Science Align', 'Information System', 'Product Management'],
    },
    degree: {
        text: 'Select your degree',
        data: ['Bachelor', 'Master', 'Phd'],
    },
    enrollmentstatus: {
        text: 'Enrollment Student',
        data: ['Yes (active student)', 'No'],
    },

};


class Profile extends Component {

    constructor(props) {
        super(props);
        this.setProfileField = this.setProfileField.bind(this);
        this.update = this.update.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            gender: 'Male',
            age: 22,
            email: null,
            campus: 'Boston',
            startterm: 'Spring 2016',
            expectedgraduation: 'June 2018',
            major: 'Computer Science Align',
            degree: 'Bachelor',
            enrollmentstatus: 'Yes (active student)',
            firstname: 'Yudong',
            lastname: 'Wang',
            middlename: 'N/A',
            nuid: '2',
            photo: 'empty',
            privacy: true,
            show: false,
        };
    }


    componentDidMount() {
        let that = this;
        let url = 'http://127.0.0.1:5000/students/1'; //here we need to get student ID from cookie or parameter
        console.log("yudong");
        fetch(url)
            .then(function (response) {

                if (response.status >= 400) {
                    console.log("yudong1");
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (data) {
                console.log("yudong2");
                console.log(data);
                console.log(data.campus);

                that.setState(data); //here need to make detail, there is one more show
            });
    }


    setProfileField(field, value) {
        console.log("set", field, value)
        this.setState({
            [field]: value
        })
    }

    update() {

        let myJson = JSON.stringify({
            campus: this.state.campus,
            gender: this.state.gender,
            email: this.state.email,
            startterm: this.state.startterm,
            expectedgraduation: this.state.expectedgraduation,
            enrollmentstatus: this.state.enrollmentstatus,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            middlename: this.state.middlename,
            photo: this.state.photo,
            privacy: this.state.privacy,
        });

        console.log("yudong", myJson);

        let url = 'http://127.0.0.1:5000/students/1'; //here we need to get student ID from cookie or parameter
        fetch(url,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: myJson,
            })
            .then(function (response) {
                console.log("yudong res");
                console.log(response);
                if (response.status >= 400) {
                    console.log("yudong1");
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function (data) {
                console.log("yudong2");
                console.log(data);
                console.log(data.campus);

            });
    }


    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }


    render() {
        return (
            <div>
                <div>
                    <ProfileCard />

                    <div class="row">
                        <div class="col-md-6">
                            <img class="rounded" style={{display: "block", margin: "auto", width: "70%"}}
                                 src={profile_pic}/>
                        </div>
                        <div class="col-md-6">
                            <Area>
                                <table>
                                    <tbody>
                                        <tr width="100%">
                                            <td width="50%">
                                                <Label>FirstName</Label>
                                            </td>
                                            <td width="10%">
                                                <ButtonEdit onClick={this.handleShow}src={pen}></ButtonEdit>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Content>Yudong</Content>
                                                <br />
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr width="100%">
                                            <td width="50%">
                                                <Label>MiddleName</Label>
                                            </td>
                                            <td width="10%">
                                                <ButtonEdit onClick={this.handleShow} src={pen}></ButtonEdit>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <Content>N/A</Content>
                                            <br />
                                        </td>
                                    </tr>
                                    </tbody>
                                    <tbody>
                                    <tr width="100%">
                                        <td width="50%">
                                            <Label>LastName</Label>
                                        </td>
                                        <td width="10%">
                                            <ButtonEdit onClick={this.handleShow} src={pen}></ButtonEdit>
                                        </td>
                                    </tr>
                                    </tbody>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <Content>Wang</Content>
                                        </td>
                                    </tr>
                                    </tbody>

                                </table>
                            </Area>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-md-6">
                            <ProfileSelect action={this.setProfileField} options={options.gender} name={"Gender"}/>
                        </div>
                        <div class="col-md-6">
                            <ProfileSelect action={this.setProfileField} options={options.startterm}
                                           name={"StartTerm"}/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <ProfileInput options={options.email}/>
                        </div>
                        <div class="col-md-6">
                            <ProfileSelect action={this.setProfileField} options={options.expectedgraduation}
                                           name={"ExpectedGraduation"}/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <ProfileSelect action={this.setProfileField} options={options.campus} name={"Campus"}/>
                        </div>
                        <div class="col-md-6">
                            <ProfileSelect action={this.setProfileField} options={options.enrollmentstatus}
                                           name={"Enrollment"}/>
                        </div>
                    </div>

                    <br />
                    <hr />
                    <Experiences/>
                    {/*<UpdateButton onClick={this.update}>Update</UpdateButton>*/}
                    <br />
                    <div style={{margin: "auto", width: "80%"}}>
                        <button onClick={this.update} type="button" class="btn btn-danger btn-lg btn-block">Update
                        </button>
                    </div>
                    <br />







                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Change your name</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} sm={3}>
                                    <h4>FirstName</h4>
                                </Col>
                                <Col sm={9}>
                                    <FormControl type="email" placeholder="Yudong" />
                                </Col>
                            </FormGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleClose}>Close</Button>
                            <Button style={{background:"#FDE6E6"}} onClick={this.handleClose}>Save changes</Button>
                        </Modal.Footer>
                    </Modal>

                </div>


            </div>
        )
    }
}


const Area = styled.div`
    background-color: #FDE6E6;
    border-radius: 22px;
    border: 3px solid #00CED1;
    // border: 3px solid rgba(245, 130, 130, 0.5);
    width:80%;
    margin:auto;
`


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


const Label = styled.p`
    margin: 3%;
    width: 200px;
    color: #cc0000;
    font-size: 25px;
    font-weight: bold;
`

const Content = styled.div`
    margin: 3%;
    color: #766D61;
    font-size: 20px;
    font-weight: bolder;
`

const ButtonEdit = styled.img`
    width: 25px;
    height: 25px;
`

export default Profile
