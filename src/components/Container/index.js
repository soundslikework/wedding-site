import React from 'react';

import styles from './Container.module.css';

const Container = (props) => (
    <div className={`${styles.container} ${props.index % 2 === 0 ? styles.isEven : styles.isOdd }`}>
        {props.children}
    </div>
);

export default Container;