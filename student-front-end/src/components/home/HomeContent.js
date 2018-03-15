import React, {Component} from 'react';
import img_background from '../../images/home_background.png'
import styled from "styled-components";
import {Link} from 'react-router-dom';

export default class HomeContent extends Component {
    render() {
        return (
            <Wrapper>
                <CardTable>
                    <tr><td>
                        <Link style={{textDecoration: 'none'}} to="/profile"><ProfileCard/></Link>
                    </td><td>
                        <GraySquare></GraySquare>
                    </td><td>
                        <Link style={{textDecoration: 'none'}} to="/academic"><AcademicCard/></Link>
                    </td></tr>
                    <tr><td>
                        <GraySquare></GraySquare>
                    </td><td>
                        <Link style={{textDecoration: 'none'}} to="/resources"><ResourceCard/></Link>
                    </td><td>
                        <GraySquare></GraySquare>
                    </td></tr>
                </CardTable>
            </Wrapper>
        )
    }
}


const ProfileCard = () => (
    <Square>
        <CardTitle>PROFILE</CardTitle>
        <CardDetails>
            Add Experience<br/>
            Change Profile<br/>
            Information
        </CardDetails>
    </Square>
)

const AcademicCard = () => (
    <Square>
        <CardTitle>ACADEMIC</CardTitle>
        <CardDetails>
            Requirements<br/>
            Curriculum<br/>
            GPA
        </CardDetails>
    </Square>
)

const ResourceCard = () => (
    <Square>
        <CardTitle>RESOURCE</CardTitle>
        <CardDetails>
            Schedule<br/>
            Tuition<br/>
            Campus
        </CardDetails>
    </Square>
)

const Square = styled.div`
        width: 250px;
        height: 250px;
        background-color: rgba(204,0,0,0.7);
        text-align: right;
        display: table-cell;
        
        &:hover {
            background-color: rgba(255,0,0,1);
            // cursor: pointer;
        }
    `

const GraySquare = styled.div`
        width: 250px;
        height: 250px;
        background-color: rgba(150,150,150,0.5);
        text-align: right;
        display: table-cell;
`

const CardTitle = styled.h1`
        margin: 0px 15px;
        color: white;
        font-size: 37px;
        padding: 20px 0;
    `

const CardDetails = styled.p`
        margin: 0px 15px;
        color: white;
        font-size: 20px;
        line-height: 33px;
        padding: 30px 0;
    `

const Wrapper = styled.div`
        width: 100%;
        height: 960px;
        background-image: url(${img_background});
        background-size: 100%;
        margin: auto auto;
    `

const CardTable = styled.table`
        margin: auto 200px;
        border-spacing: 10px;
        padding-top: 260px;
        display: inline-block;
    `