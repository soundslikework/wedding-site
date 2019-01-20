import React from 'react';

import Container from '../Container';

const Location = (props) => {
    return (
        <Container index={props.index}>
            <h2>Login</h2>
            <h3>Login-y stuff</h3>
            <p>This will let people enter their email to access the google form or the login protected portion of the site to record their RSVP and food preference and request songs</p>
        </Container>
    );
};

export default Location;