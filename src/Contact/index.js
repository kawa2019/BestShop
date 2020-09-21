import React from 'react';
import FromUs from './FromUs/index';
import YourContact from './YourContact/index';
import styles from './index.module.scss';

export default () => {
    return (
        <section id={"contact"} className={styles.wrapper}>
            <div className={`container ${styles.containerWrapper}`}>
                <FromUs />
                <YourContact />
            </div>
        </section>
    )
}