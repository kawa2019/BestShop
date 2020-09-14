import React, { useContext } from 'react';
import VersionContext from '../../VersionContext';
import styles from './index.module.scss';

export default () => {
    const context = useContext(VersionContext);
    return (
        <div className={`${styles.wrapper} ${styles[context.modifyClass]}`}>
            <div>{context.version}</div>
            <div>{context.price}</div>
            {context.addInfo && <div>{context.addInfo}</div>}
        </div>
    )
}