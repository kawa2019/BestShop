import React from 'react';
import styles from './index.module.scss';
import stylesText from './OneAttract/TextContent/index.module.scss'
import stylesImg from './OneAttract/index.module.scss';
import OneAttract from './OneAttract';

export default () => {
    const attractInfoArr = [{
        heading: "Be always first",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        img: require('../assets/images/Macbook2.webp'),
        modifyClassText: stylesText.mcBook,
        modifyClassImg: stylesImg.mcBook
    },
        {
            heading: <>Your shop is <br/>where you are!</>,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            img: require('../assets/images/iPhone2.webp'),
            modifyClassText: stylesText.phone,
            modifyClassImg: stylesImg.phone
        },
        {
            heading: <>Increase recognition <br/>your brand!</>,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            img: require('../assets/images/Trumpet.webp'),
            modifyClassText: stylesText.spread,
            modifyClassImg: stylesImg.spread
        }]
    return (
        <section id="benefits" className={styles.wrapper}>
            <div className={`${styles.wrapperContainer} container`}>
                {attractInfoArr.map((oneAttract, index) => {
                    return (
                        <OneAttract key={index} heading={oneAttract.heading}
                                    text={oneAttract.text} img={oneAttract.img}
                                    modifyClassText={oneAttract.modifyClassText}
                                    modifyClassImg={oneAttract.modifyClassImg}/>
                    )
                })}
            </div>
        </section>
    )
}