import React, {Component} from 'react';
import background from '../../images/coop_background.jpeg'
import styled from "styled-components";

class CoopHeader extends Component {

    render() {
        return (
            <Wrapper>
                <Table>
                    <tr>
                        <th><Title1>M</Title1></th>
                        <th><Title2>Y</Title2></th>
                        <th><Space></Space></th>
                        <th><Title1>C</Title1></th>
                        <th><Title2>O</Title2></th>
                        <th><Title1>O</Title1></th>
                        <th><Title2>P</Title2></th>
                    </tr>
                </Table>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
        width: 100%;
        height: 710px;
        background-image: url(${background});
        background-size: 100%;
    `

const Table = styled.table`
        border-spacing: 10px;
        margin: auto;
        padding-top: 100px;
    `

const Title1 = styled.p`
        color: #CC0000;
        font-size: 100px;
`

const Title2 = styled.p`
        color: #781111;
        font-size: 100px;
`

const Title3 = styled.p`
        font-size:40px;
        color:#F58282;
`

const Space = styled.p`
        width: 30px;
`

export default CoopHeader