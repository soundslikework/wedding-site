import React from 'react';

import styles from './style.module.css';

const Copy = (props) => (
    <p className={styles.copy}>{props.children}</p>
);

export default Copy;