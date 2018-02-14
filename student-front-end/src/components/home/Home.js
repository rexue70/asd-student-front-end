import React, {Component} from 'react';
import HomeHeader from "./HomeHeader";
import HomeContent from "./HomeContent";
import HomeFooter from "./HomeFooter";
import styled from "styled-components";


class Home extends Component {

    render() {
        return (
            <Wrapper>
                <HomeHeader/>
                <HomeContent/>
                <HomeFooter/>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
        margin: auto auto;
        width: 1050px;
        height: 100%;
    `


export default Home