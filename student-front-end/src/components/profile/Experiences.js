import React, {Component} from 'react';
import styled from "styled-components";
import AddExperience from "./AddExperience"
import EditExperience from "./EditExperience";
import pen from '../../images/edit_pen.png'

export default class Experiences extends Component {
    constructor() {
        super();
        this.state = {
            addNew: false,
            edit:false,
            editItem: null,
            index: 2,
            experiences: [
                {
                    id: 1,
                    jobTitle: "Software Engineer Intern",
                    company: "Amazon",
                    time: "Sep 2017 - Dec 2017",
                    desc: "I worked as Software Engineer Intern."
                },
                {
                    id: 2,
                    jobTitle: "Data Engineer Intern",
                    company: "Zillow",
                    time: "May 2017 - August 2017",
                    desc: "I worked as Data Engineer Intern."
                }
                ]
        };
    }

    increase = () => {
        this.setState({
            index: this.state.experiences.length
        });
    }

    addNewExperience = () => {
        this.setState({
            addNew: !this.state.addNew
        });
    }

    editExperience = () => {
        this.setState({
            edit: !this.state.edit
        });
    }

    handleAdd = (item) => {
        this.state.experiences.push(item)
    }

    handleDel = (item) => {
        this.setState({
            experiences: this.state.experiences.filter(experience => experience.id !== item.id)
        })
    }

    handleEdit (item) {
        this.setState({
            edit: !this.state.edit,
            editItem:item
        });
    }

    render() {
        return (
            <div>
                <tr>
                    <td><CardTitle>Experience</CardTitle>
                    </td>
                    <td><ButtonAdd onClick = {this.addNewExperience}>+</ButtonAdd>
                    </td>
                </tr>

                {this.state.experiences.map(item => (
                    <div>
                        <Details>
                            <tr key={item.id}>
                                <td>
                                    <JobTitle>{item.jobTitle}</JobTitle>
                                </td>
                                <td>
                                    {/*<Button onClick={() => this.handleDel(item)}>-</Button>*/}
                                    <ButtonEdit onClick={() => this.handleEdit(item)} src={pen}></ButtonEdit>
                                </td>
                            </tr>

                            <Company>{item.company}</Company>
                            <Time>{item.time}</Time>
                            <Desc>{item.desc}</Desc>
                        </Details>
                        <Rule/>
                    </div>
                ))}

                {
                    this.state.addNew ?
                        <AddExperience
                            closePopup={this.addNewExperience}
                            text={"Add New Experience"}
                            experiences={this.state.experiences}
                            increaseIndex={this.increase}
                            index={this.state.index}
                            addFunc={this.handleAdd}
                        >
                        </AddExperience>
                        : null
                }

                {
                    this.state.edit ?
                        <EditExperience
                            closePopup={this.editExperience}
                            text={"Edit Experience"}
                            experiences={this.state.experiences}
                            item={this.state.editItem}
                            deleteFunc={this.handleDel}
                        >
                        </EditExperience>
                        : null
                }

            </div>
        )
    }
}

const CardTitle = styled.h1`
        width:400px;
        color: #766D61;
        font-size: 35px;
        padding: 20px 0;
    `

const ButtonAdd = styled.button`
        margin: auto 600px;
        color: #766D61;
        font-size: 30px;
        font-weight: bold;
        background: transparent;
        border: none ;
        float: right;
`

const ButtonEdit = styled.img`
    width: 25px;
    height: 25px;
`

const JobTitle = styled.p`
        width: 1000px;
        color: #cc0000;
        font-size: 25px;
        font-weight: bold;
    `

const Company = styled.p`
        margin: auto;
        color: #766D61;
        font-size: 20px;
        font-weight: bolder;
    `

const Time = styled.p`
        color: #766D61;
        font-size: 15px;
        font-weight: normal;
    `

const Details = styled.p`
        margin-top: 0px;
        color: black;
        line-height: 33px;
        padding: 10px 0;
    `

const Desc = styled.p`
        margin: auto;
        color: #766D61;
        font-size: 15px;
        font-weight: normal;
        line-height: 120%;
    `

const Rule = styled.p`
        maring-right: 100px;
        height: 1px;
        border: 0;
        box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);
    `
