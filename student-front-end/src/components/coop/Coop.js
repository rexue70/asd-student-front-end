import React, {Component} from 'react';
import CoopHeader from './CoopHeader';
import styled from "styled-components";

class Coop extends Component {

    render() {
        return (
            <Wrapper>
                <CoopHeader/>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
        margin: auto auto;
        width: 100%;
        height: 100%;
    `

export default Coop