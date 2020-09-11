import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './index.module.scss'
export default () => {
    return (
        <header className={styles.navigation}>
            <div className={`${styles.contentWrapper} container`}>
                <span className={styles.logo}>BestShop</span>
                <ul className={styles.menu}>
                    <li>
                        <ScrollLink>WHY US</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink>BENEFITS</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink>PRICES</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink>CONTACT</ScrollLink>
                    </li>
                </ul>
            </div>
        </header>
    )
} 