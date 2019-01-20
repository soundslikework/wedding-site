import React from 'react';

import Container from '../Container';

const Footer = (props) => {
    return (
        <Container index={props.index}>
            <h2>Footer</h2>
            <h3>Also contact</h3>
            <p>This'll have my email and a little thank you for visiting.</p>
        </Container>
    );
};

export default Footer;