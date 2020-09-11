import React from 'react';
import Data from './Data/index';
import person from '../assets/images/Person.svg';
import eye from '../assets/images/Eye.svg';
import catalog from '../assets/images/Catalog.svg';
import styles from './index.module.scss'

export default () => {
    return (
        <section className={styles.wrapper}>
            <div className="container">
                <h2>The most popular sales platform in country</h2>
                <div className={styles.wrapperData}>
                    <Data img={person} num={"10000+"} what={"daily entries"} />
                    <Data img={eye} num={"2000000+"} what={<>seen products<br />every day</>} />
                    <Data img={catalog} num={"10000+"} what={<>added posts<br />daily</>} />
                </div>
            </div>
        </section>
    )
}