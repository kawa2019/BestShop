import React from 'react';
import styles from './index.module.scss';

export default () => {
    return (
        <div className={styles.wrapper}>
            <h2>Any questions?</h2>
            <p>Leave your email address or call us!</p>
            <ul>
                <li>info@bestshop.xyz</li>
                <li>123 456 789</li>
            </ul>
        </div>
    )
}