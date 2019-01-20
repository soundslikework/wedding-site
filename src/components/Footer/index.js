import React from 'react';

import Container from '../Container';
import Copy from '../Copy';

const Footer = (props) => {
    return (
        <Container index={props.index}>
            <Copy>Contact and Footer. This'll have my email</Copy>
        </Container>
    );
};

export default Footer;