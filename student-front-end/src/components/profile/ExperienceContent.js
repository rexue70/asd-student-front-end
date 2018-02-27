import React, {Component} from 'react';
import styled from "styled-components";

export default class ExperienceContent extends Component {
    constructor() {
        super();
    }

    handleTitle(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    handleCompany(e) {
        const company = e.target.value;
        this.props.changeCompany(company);
    }

    handleDesc(e) {
        const description = e.target.value;
        this.props.changeDesc(description);
    }

    render() {
        return(
                <div>
                    <Title>
                        <label for={"jobTitle"}>Job Title</label>
                    </Title>
                    <Input onChange={this.handleTitle.bind(this)} id={"jobTitle"} value={this.props.item.jobTitle} size={50}></Input>

                    <Title>
                        <label for={"company"}>Company</label>
                    </Title>
                    <Input onChange={this.handleCompany.bind(this)} id={"company"} value={this.props.item.company} size={50}></Input>

                    <Title>
                        <label for={"desc"}>Description</label>
                    </Title>
                    <Textarea onChange={this.handleDesc.bind(this)} id={"desc"}
                              value={this.props.item.description} cols={50} rows={6}></Textarea>
                </div>
            )
    }
}

const Title = styled.p`
        color: black;
        font-size: 12px;
        margin: 0 10%;
        font-weight: bold;
    `

const Input = styled.input`
        margin: 1% 10%;
        height: 30px; 
    `

const Textarea = styled.textarea`
        margin: 1% 10%;
    `
