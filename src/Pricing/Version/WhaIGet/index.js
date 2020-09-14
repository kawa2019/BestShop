import React, { useContext } from 'react';
import VersionContext from '../../VersionContext';
import styles from './index.module.scss';
export default () => {
    const context = useContext(VersionContext);
    return (
        <ul className={`${styles.wrapper} ${styles[context.modifyClass]}`}>
            <li>
                {context.sizeDisk} HDD
            </li>
            <li>
                {context.subDomain} Subdomain
            </li>
            <li>
                {context.numEmails} E-mails
            </li>
            <li>
                {context.yearsLicense} license
            </li>
            <li>
                Full support
            </li>
        </ul>
    )
}