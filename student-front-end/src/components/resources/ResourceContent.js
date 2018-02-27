import React, {Component} from 'react';
import resource_background from '../../images/resource_background.png';
import styled from 'styled-components'
import { css } from 'react-bootstrap';

class ResourceContent extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div style={{backgroundImage: "url(" + resource_background + ")", backgroundPosition: "center", height: "700px"}}>
                    <Title>Resource</Title>
                </div>
                <Divider1></Divider1>

                <SubTitle>Student Resources</SubTitle>
                <SubTitle1>CAMPUS SUPPORT</SubTitle1>
                <ul>
                    <List>Free Wi-Fi and Technology Checkout</List>
                    <List>Parking positions</List>
                    <List>Husky Card</List>
                    <List>Printing</List>
                    <List>Student Resource Center</List>

                </ul>
                <SubTitle1>STUDENT SERVICES</SubTitle1>
                <ul>
                    <List>Career Services</List>
                    <List>Student Financial Services</List>
                    <List>myNortheastern</List>
                    <List>Disability Resource Center</List>
                </ul>

                <SubTitle1>HEALTH RESOURCES</SubTitle1>
                <ul>
                    <List>Northeastern University Student Health Plan</List>
                </ul>
                <br/>
                <br/>
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
    
    &:hover {
            color: rgba(255,0,0,1);
            cursor: pointer;
        }
    `
const Text = styled.p`
    font-family: "Helvetica Neue";
    font-size: 2em;
    font-weight: 100;
    color: #8c8c8c;
    `

export default ResourceContent
