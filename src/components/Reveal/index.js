import React from 'react';
import styles from './style.module.css';

const Reveal = (props) => {
    return (
        <div className={`${props.show ? styles.show : styles.hide }`}>
            {props.children}
        </div>
    );
};

export default Reveal;