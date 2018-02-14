import React, {Component} from 'react';
import HomeContent from "./HomeContent";
import styled from "styled-components";


class Home extends Component {

    render() {
        return (
            <Wrapper>
                <HomeContent/>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
        margin: auto auto;
        width: 100%;
        height: 100%;
    `


export default Home