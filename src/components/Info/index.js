import React from 'react';

import Container from '../Container';

const Info = (props) => {
    return (
        <Container index={props.index}>
            <h2>INFO</h2>
            <h3>Nice stuff</h3>
            <p>This will have a short paragraph about our romance and relationship, a few photos of us and any other information for the wedding that's necessary</p>
        </Container>
    );
};

export default Info;