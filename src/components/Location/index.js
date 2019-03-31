import React from 'react';

import Container from '../Container';

const Location = (props) => {
    return (
        <Container index={props.index}>
            <h2>The Gladstone Hotel</h2>
            <h3>October 13, 2019 - 4:30 / 1214 Queen St W, Toronto</h3>
            <p>The Gladstone has a special room rate they can give to guests coming in and staying over for the wedding, so please contact us and we'll pass that along to you. You can reach the Gladstone's front desk at 416-531-4635 ext 0, or email reservations@gladstonehotel.com </p>
            <p>TBD Map</p>
        </Container>
    );
};

export default Location;