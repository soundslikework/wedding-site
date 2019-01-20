import React from 'react';

import Container from '../Container';
import Copy from '../Copy';

const Info = (props) => {
    return (
        <Container index={props.index}>
            <Copy>Info. This will have a short paragraph about our romance and relationship, a few photos of us and any other information for the wedding that's necessary</Copy>
        </Container>
    );
};

export default Info;