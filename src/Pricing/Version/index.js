import React from 'react';
import TopInfo from './TopInfo/index';
import WhatIGet from './WhaIGet/index';
import styles from './index.module.scss';
export default () => {
    return (
        <div className={styles.wrapper}>
            <TopInfo />
            <WhatIGet />
            <button>Begin</button>
        </div>
    )
}