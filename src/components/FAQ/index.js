import React from 'react';

import Container from '../Container';
import Copy from '../Copy';

const Location = (props) => {
    return (
        <Container index={props.index}>
            <Copy>FAQ. This will have info about the regsitry, our honeymoon, and any other information</Copy>
        </Container>
    );
};

export default Location;