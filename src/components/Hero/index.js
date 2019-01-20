import React from 'react';

import Container from '../Container';

const Hero = (props) => {
    return (
        <Container index={props.index}>
            <h1>HERO</h1>
            <h3>Introduction</h3>
            <p>This will have a photo of us, a title, and a welcome message</p>
        </Container>
    );
};

export default Hero;