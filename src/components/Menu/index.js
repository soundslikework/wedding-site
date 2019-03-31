import React from 'react';

import Container from '../Container';

const Menu = (props) => {
    return (
        <Container index={props.index}>
            <h2>Menu</h2>
            <h3>Menu-y stuff</h3>
            <p>A menu will go here</p>
        </Container>
    );
};

export default Menu;