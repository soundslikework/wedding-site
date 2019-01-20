import React from 'react';

import Container from '../Container';

const Location = (props) => {
    return (
        <Container index={props.index}>
            <h2>Location</h2>
            <h3>Useful stuff</h3>
            <p>Location. This will have clear descriptions of where and when the wedding's taking place as well as a map to the Gladstone. It'll include contact info to book a room at the Gladstone and the other hotel we find for people who can't afford the Gladstone</p>
        </Container>
    );
};

export default Location;