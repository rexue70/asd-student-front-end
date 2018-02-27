import React, {Component} from 'react';
import styled from "styled-components";
import ExperienceContent from "./ExperienceContent";

export default class AddExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobTitle: "title",
            company: "company",
            description: "description"
        }
    }

    changeTitle(title) {
        this.setState({
            jobTitle: title
        });
    }

    changeCompany(company) {
        this.setState({
            company: company
        });
    }

    changeDesc(description) {
        this.setState({
            description: description
        });
    }

    AddExperience = () => {
        var count = this.props.index + 1
        var item = {
            id: count,
            jobTitle: this.state.jobTitle,
            company: this.state.company,
            time: "",
            desc: this.state.description,
        }
        this.props.addFunc(item)
        this.props.increaseIndex()
        this.props.closePopup()
    }

    render() {
        return (
            <Wrapper>
                <Wrapper_Inner>
                    <h2>{this.props.text}</h2>
                    <Rule></Rule>
                    <ExperienceContent
                        changeTitle={this.changeTitle.bind(this)}
                        changeCompany={this.changeCompany.bind(this)}
                        changeDesc={this.changeDesc.bind(this)}
                        item={this.state}/>
                    <Button onClick={this.props.closePopup}>Cancel</Button>
                    <Button onClick={this.AddExperience}>Add</Button>
                </Wrapper_Inner>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
        position: fixed;
        width: 100%;
        height: 120%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background-color: rgba(0,0,0, 0.5);
    `

const Wrapper_Inner = styled.div`
        position: absolute;
        left: 25%;
        right: 25%;
        top: 25%;
        bottom: 25%;
        margin: auto;
        background: white;
    `

const Button = styled.button`
        margin: 0 10%;
    `

const Rule = styled.p`
        height: 1px;
        border: 0;
        box-shadow: inset 0 12px 12px -12px rgba(0, 0, 0, 0.5);
    `