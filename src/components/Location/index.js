import React from 'react';

import Container from '../Container';
import Copy from '../Copy';

const Location = (props) => {
    return (
        <Container index={props.index}>
            <Copy>Location. This will have clear descriptions of where and when the wedding's taking place as well as a map to the Gladstone. It'll include contact info to book a room at the Gladstone and the other hotel we find for people who can't afford the Gladstone</Copy>
        </Container>
    );
};

export default Location;