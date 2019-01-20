import React from 'react';

import Container from '../Container';
import Copy from '../Copy';

const Location = (props) => {
    return (
        <Container index={props.index}>
            <Copy>Login. This will let people enter their email to access the google form or the login protected portion of the site to record their RSVP and food preference and request songs</Copy>
        </Container>
    );
};

export default Location;