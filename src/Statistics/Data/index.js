import React from 'react';
import {ImgWithBack} from "../../ImgWithBack";
import styles from './index.module.scss';

export default ({img, num, what}) => {
    return (
        <div className={styles.single}>
            <ImgWithBack img={img} style={styles.imgWithBack}/>
            <span className={styles.num}>{num}</span>
            <p className={styles.what}>{what}</p>
        </div>
    )
}