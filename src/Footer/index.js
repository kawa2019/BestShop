import React from 'react';
import twitter from '../assets/images/Twitter.svg';
import fb from '../assets/images/Facebook.svg';
import styles from './index.module.scss';

export default () => {
    return (
        <footer className={styles.wrapper}>
            <div className={`container ${styles.container}`}>
                <div className={styles.copyright}>
                    <div>BestShop</div>
                    <p>© 2019 BestShop LTD, All Rights Reserved</p>
                </div>
                <div className={styles.socials}>
                    <img src={twitter} />
                    <img src={fb} />
                </div>
            </div>
        </footer>
    )
}