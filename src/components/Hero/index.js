import React from 'react';

import Container from '../Container';

const Hero = (props) => {
    return (
        <Container index={props.index}>
            <h1>#Brelman2019</h1>
            <h3>True love is the greatest thing in the world - except for a nice MLT - mutton, lettuce and tomato sandwich, where the mutton is nice and lean and the tomato is ripe. They're so perky, I love that. - Miracle Max</h3>
            <p>It's finally happening - Adam and Ayesha are getting married!</p>
            <p>October 13, 2019</p>
        </Container>
    );
};

export default Hero;