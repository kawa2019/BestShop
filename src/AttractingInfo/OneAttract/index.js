import React from 'react';
import TextContent from './TextContent';
import { ImgWithBack } from '../../ImgWithBack';
import style from './index.module.scss';

export default ({ heading, text, img, modifyClassText, modifyClassImg }) => {
    return (
        <div className={style.container}>
            <TextContent heading={heading} text={text} modifyClassText={modifyClassText} />
            <ImgWithBack img={img} style={modifyClassImg}/>
        </div>
    )
}