import React, {Component} from 'react';
import img_CCISlogo from '../images/NEU-logo.png'
import styled from "styled-components";


class Header extends Component {

    render() {
        return (
            <div>
                {/*<h1-small>Northeastern University</h1-small>*/}
                {/*<br />*/}
                {/*<h3-small>College of Computer and Information Science</h3-small>*/}
                {/*<br />*/}
                {/*<br />*/}
                <CCISLogo/>
                <TitileArea>
                    <h1-big>CURRENT STUDENT</h1-big>
                    <br />
                    <h3-median>Align MS in Computer Science Program</h3-median>
                    <br />
                    <br />
                    <br />
                </TitileArea>
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

const TitileArea = styled.div`
        margin: 20px;
    `

const LogoArea = styled.div`
        width: 100%;
        height: 100px;
    `

const LogoImage = styled.img`
        height: 100%;
    `

export default Header