import React, {Component} from 'react';
import profile_image from '../../images/profile_background.png';
import profile_pic from '../../images/Profile_example_pic.png';
import styled from 'styled-components'
import ProfileInput from "../profile/ProfileInput";
import { Row,Col,Grid,css } from 'react-bootstrap';

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
                    <a style={{margin:'5%'}}>Hi, Yudong, This is your profile details</a>
                    <br/>
                </div>



                <Grid>
                    <Row className="show-grid">

                        <Col md={6}>
                            {/*left*/}
                            {/*<code>&lt;{'Col md={6} mdPush={6}'} /">&gt;</code>*/}
                            <img src={profile_pic} alt="pic"/>
                        </Col>

                        <Col md={6}>
                            {/*right*/}
                            {/*<code>&lt;{'Col md={6} mdPull={6}'} /">&gt;</code>*/}
                            <ProfileInput options={options.FirstName}/>
                            <ProfileInput options={options.MiddleName}/>
                            <ProfileInput options={options.LastName}/>
                        </Col>

                    </Row>
                </Grid>
                {/*<CardParent>*/}
                    {/*<CardChild>*/}
                        {/**/}
                    {/*</CardChild>*/}

                    {/*<CardChild>*/}
                        {/*/!*<FormCss>*!/*/}
                       {/**/}
                        {/*/!*</FormCss>*!/*/}
                    {/*</CardChild>*/}
                {/*</CardParent>*/}

            </div>
        )
    }
}




const FormCss = styled.div`
    display: table-cell;
    float:right;
    margin-right: 47%;
    margin-bottom: 27%;
    `

const CardParent = styled.div`
    display: table;
    width: 100%;
    table-layout: fixed;
    `

const CardChild = styled.div`
     width: 50%;
    display: table-cell;
    text-align: center;
    `

export default ProfileCard