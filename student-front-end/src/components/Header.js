import React, {Component} from 'react';
import img_CCISlogo from '../images/NEU-logo.png'
import styled from "styled-components";

class Header extends Component {
    render() {
        return (
            <div>
                <CCISLogo/>
                <MainTitile>CURRENT STUDENT</MainTitile>
                <SubTitile>Align MS in Computer Science Program</SubTitile>
            </div>
        )
    }
}

const CCISLogo = () => (
    <LogoArea>
        <a href="http://www.ccis.northeastern.edu" target="_blank" rel="noreferer noopener" alt="Northeastern University" id="nu-logo">
            <LogoImage src={img_CCISlogo} alt={'NEU-logo'}/>
        </a>
    </LogoArea>
    )


const LogoArea = styled.div`
        width: 100%;
        height: 100px;
    `

const LogoImage = styled.img`
        height: 100%;
    `

const MainTitile = styled.h1`
        margin: 10px 15px;
        color: #CC0000;
        font-size: 60px;
    `

const SubTitile = styled.h1`
        margin: 10px 15px;
        color: dimgrey;
        font-size: 30px;
        font-weight:300;
    `

export default Header