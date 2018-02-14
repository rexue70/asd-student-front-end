import React, {Component} from 'react';
import img_footer from '../images/footer.png'
import styled from 'styled-components'

class Footer extends Component {
    render() {
        return (
            <Wrapper>
                <FooterImage src={img_footer} alt={'Footer'}/>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
        width: 100%;
    `

const FooterImage = styled.img`
        width: 100%;
    `

export default Footer