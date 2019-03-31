import React from 'react';

import Container from '../Container';

const Info = (props) => {
    return (
        <Container index={props.index}>
            <h2>INFO</h2>
            <h3>Nice stuff</h3>
            <p>The scene: A crowded office, full of book nerds.</p>
            <p>The players: One, a man with a fabulous beard and beautiful blue eyes.</p>
            <p>The other, a beautiful woman with unruly curls and an infectious laugh.</p>
            <p>Separated by computer monitors, they began to share Simpsons quotes, not realizing they were each trying to woo the other - but eventually, they DID figure it out. And the rest, as they say, is history.</p>
            <p>Since those fateful Simpsons quotes 5 years ago, we've had the most wonderful time, and have built a great relationship with each other - and we're excited to share our special day with you. Please join us as we start the next phase of our lives together!</p>
        </Container>
    );
};

export default Info;