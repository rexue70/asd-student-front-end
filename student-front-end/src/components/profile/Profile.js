import React, {Component} from 'react';
import styled from 'styled-components'
import ProfileSelect from "./ProfileSelect";
import ProfileInput from "../profile/ProfileInput";
import ProfileCard from "../profile/ProfileCard"
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
    Address: {
        text: 'Input your address',
    },
    Phone: {
        text: 'Input your Phone',
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
    Citizenship: {
        text: 'Select your citizenship',
        data: ['America', 'Chinese', 'Indian', 'Canadian'],
    }

};


class Profile extends Component {
    render() {
        return (
            <div>
                <div>
                    {/*<div style={{width: '100%'}}>*/}
                    <ProfileCard />
                    {/*</div>*/}

                    <div style={{display: 'table', width: '100%'}}>
                        <div style={{display: 'table-cell'}}>
                            <FormCss>
                                <ProfileSelect options={options.Gender}/>
                                <ProfileSelect options={options.Age}/>
                                <ProfileInput options={options.Email}/>
                                {/*<ProfileInput options={options.Address}/>*/}
                                {/*<ProfileInput options={options.Phone}/>*/}
                                <ProfileSelect options={options.Campus}/>
                            </FormCss>
                        </div>

                        <div style={{display: 'table-cell'}}>
                            <FormCss>
                                <ProfileSelect options={options.StartTerm}/>
                                <ProfileSelect options={options.ExpectedGraduation}/>
                                <ProfileSelect options={options.Major}/>
                                <ProfileSelect options={options.Degree}/>
                                <ProfileSelect options={options.Enrollment}/>
                                {/*<ProfileSelect options={options.Citizenship}/>*/}
                            </FormCss>
                        </div>
                    </div>
                    <Experiences/>
                    <UpdateButton>Update</UpdateButton>
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


export default Profile
