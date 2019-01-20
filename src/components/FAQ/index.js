import React from 'react';

import Container from '../Container';

const Location = (props) => {
    return (
        <Container index={props.index}>
            <h2>FAQ</h2>
            <h3>Where people ask questions</h3>
            <p>This will have info about the regsitry, our honeymoon, and any other information</p>
        </Container>
    );
};

export default Location;