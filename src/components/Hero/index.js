import React from 'react';

import Container from '../Container';
import Copy from '../Copy';

const Hero = (props) => {
    return (
        <Container index={props.index}>
            <Copy>Hero. This will have a photo of us, a title, and a welcome message</Copy>
        </Container>
    );
};

export default Hero;