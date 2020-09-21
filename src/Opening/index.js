import React from 'react';
import opening from '../assets/images/Background.webp'
import styles from './index.module.scss'

export default () => {
    return (
        <section id={"opening"} className={styles.opening}>
            <div className={styles.content}>
                <h1>Sell More!</h1>
                <p>Open shop on our platform and increase your sales</p>
                <a href="#" className="btn">Open your shop</a>
            </div>
            <img src={opening} />
        </section>
    )
}