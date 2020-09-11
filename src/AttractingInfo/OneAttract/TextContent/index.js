import React from 'react';
import styles from './index.module.scss';

export default ({ heading, text, modifyClassText }) => {
    return (
        <div className={`${styles.wrapper} ${modifyClassText}`}>
            <h2>{heading}</h2>
            <p>
                {text}
            </p>
        </div>
    )
}