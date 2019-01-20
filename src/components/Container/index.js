import React from 'react';

import styles from './Container.module.css';

const Container = (props) => (
    <div className={`${styles.container} ${props.index % 2 === 0 ? styles.main : styles.secondary }`}>
        {props.children}
    </div>
);

export default Container;