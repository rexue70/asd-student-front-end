import React, {Component} from 'react';
import profile_image from '../../images/profile_background.png';
import profile_pic from '../../images/Profile_example_pic.png';
import styled from 'styled-components'
import ProfileInput from "../profile/ProfileInput";
import {Row, Col, Grid, css} from 'react-bootstrap';
import pen from '../../images/edit_pen.png'


const options = {
    FirstName: {
        text: 'FirstName',
    },
    MiddleName: {
        text: 'MiddleName',
    },
    LastName: {
        text: 'LastName',
    },
};

class ProfileCard extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div>
                    <img style={{width: "100%"}} src={profile_image} alt="pic"/>
                    <hr />
                    <a style={{margin: '14%'}}>Hi, Yudong, This is your profile details</a>
                    <br/>
                    <br/>
                </div>


                {/*<Grid>*/}
                    {/*<Row className="show-grid">*/}

                        {/*<Col md={6}>*/}
                            {/*<img style={{display: "block", margin: "auto", width: "50%", height: "50%"}}*/}
                                 {/*src={profile_pic} alt="pic"/>*/}
                        {/*</Col>*/}

                        {/*<Col md={6}>*/}
                            {/*<Area>*/}
                                {/*<table>*/}
                                    {/*<tbody>*/}
                                    {/*<tr width="100%">*/}
                                        {/*<td width="50%">*/}
                                            {/*<Label>FirstName</Label>*/}
                                        {/*</td>*/}
                                        {/*<td width="10%">*/}
                                            {/*<ButtonEdit src={pen}></ButtonEdit>*/}
                                        {/*</td>*/}
                                    {/*</tr>*/}
                                    {/*</tbody>*/}
                                    {/*<tbody>*/}
                                    {/*<tr>*/}
                                        {/*<td>*/}
                                            {/*<Content>Yudong</Content>*/}
                                        {/*</td>*/}
                                    {/*</tr>*/}
                                    {/*</tbody>*/}
                                    {/*<tbody>*/}
                                    {/*<tr width="100%">*/}
                                        {/*<td width="50%">*/}
                                            {/*<Label>MiddleName</Label>*/}
                                        {/*</td>*/}
                                        {/*<td width="10%">*/}
                                            {/*<ButtonEdit src={pen}></ButtonEdit>*/}
                                        {/*</td>*/}
                                    {/*</tr>*/}
                                    {/*</tbody>*/}
                                    {/*<tbody>*/}
                                    {/*<tr>*/}
                                        {/*<td>*/}
                                            {/*<Content></Content>*/}
                                        {/*</td>*/}
                                    {/*</tr>*/}
                                    {/*</tbody>*/}
                                    {/*<tbody>*/}
                                    {/*<tr width="100%">*/}
                                        {/*<td width="50%">*/}
                                            {/*<Label>LastName</Label>*/}
                                        {/*</td>*/}
                                        {/*<td width="10%">*/}
                                            {/*<ButtonEdit src={pen}></ButtonEdit>*/}
                                        {/*</td>*/}
                                    {/*</tr>*/}
                                    {/*</tbody>*/}
                                    {/*<tbody>*/}
                                    {/*<tr>*/}
                                        {/*<td>*/}
                                            {/*<Content>Wang</Content>*/}
                                        {/*</td>*/}
                                    {/*</tr>*/}
                                    {/*</tbody>*/}

                                {/*</table>*/}
                            {/*</Area>*/}
                        {/*</Col>*/}

                    {/*</Row>*/}
                {/*</Grid>*/}







                {/*<br />*/}
                {/*<hr />*/}
                {/*<br />*/}
            </ div >
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


export default ProfileCard