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
                        <Link style={{textDecoration: 'none'}} to="/academic"><AcademicCard/></Link>
                    </td></tr>
                    <tr><td>
                        <Link style={{textDecoration: 'none'}} to="/coop"><CoopCard/></Link>
                    </td><td>
                        <Link style={{textDecoration: 'none'}} to="/resources"><ResourceCard/></Link>
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
        <CardDetails>
            Requirements<br/>
            Curriculum<br/>
            GPA
        </CardDetails>
        <CardTitle>ACADEMIC</CardTitle>
    </Square>
)

const CoopCard = () => (
    <Square>
        <CardTitle>CO-OP</CardTitle>
        <CardDetails>
            Co-op Records<br/>
            Co-op Research<br/>
            FAQ
        </CardDetails>
    </Square>
)

const ResourceCard = () => (
    <Square>
        <CardDetails>
            Schedule<br/>
            Tuition<br/>
            Campus
        </CardDetails>
        <CardTitle>RESOURCE</CardTitle>
    </Square>
)

const Square = styled.div`
        width: 250px;
        height: 250px;
        background-color: rgba(204,0,0,0.7);
        background-repeat: no-repeat;
        text-align: right;
        display: table-cell;
        
        &:hover {
            background-color: rgba(255,0,0,1);
            // cursor: pointer;
        }
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
    `

const CardTable = styled.table`
        border-spacing: 10px;
        margin: auto;
        padding-top: 180px;
    `