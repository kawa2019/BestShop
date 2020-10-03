import React from 'react';
import Version from './Version/index';
import {Provider} from './VersionContext';
import styles from './index.module.scss';

export default () => {
    const versionsState = [{
        version: "Basic",
        price: "$0",
        addInfo: "",
        sizeDisk: "100 MB",
        subDomain: 1,
        numEmails: 2,
        yearsLicense: "Two",
        modifyClass: "basic"
    },
        {
            version: "Professional",
            price: "$25",
            addInfo: "Limited offer",
            sizeDisk: "500 MB",
            subDomain: 2,
            numEmails: 5,
            yearsLicense: "One",
            modifyClass: "professional"
        },
        {
            version: "Premium",
            price: "$60",
            addInfo: "Limited offer",
            sizeDisk: "2 GB",
            subDomain: 5,
            numEmails: 20,
            yearsLicense: "Two",
            modifyClass: "premium"
        }
    ]
    return (
        <section id={"pricing"} className={styles.wrapper}>
            <div className={`${styles.container} container`}>
                <h2>Pricing</h2>
                <div className={styles.versionsContainer}>
                    <Provider value={versionsState[0]}>
                        <Version/>
                    </Provider>
                    <Provider value={versionsState[1]}>
                        <Version/>
                    </Provider>
                    <Provider value={versionsState[2]}>
                        <Version/>
                    </Provider>
                </div>
            </div>
        </section>
    )
};