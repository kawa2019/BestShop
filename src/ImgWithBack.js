import React from 'react';

export const ImgWithBack = ({img, style}) => {
    return (
        <div className={style}>
            <img src={img} />
        </div>
    )
}