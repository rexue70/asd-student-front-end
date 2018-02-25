import React, {Component} from 'react';

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
                    <p>Job Title</p>
                    <input onChange={this.handleTitle.bind(this)} value={this.props.item.jobTitle}></input>
                    <p>Company</p>
                    <input onChange={this.handleCompany.bind(this)} value={this.props.item.company}></input>
                    <p>Description</p>
                    <input onChange={this.handleDesc.bind(this)} value={this.props.item.description}></input>
                </div>
            )
    }
}