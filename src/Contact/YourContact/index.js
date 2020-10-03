import React from 'react';
import styles from './index.module.scss';
import {useYourContactLogic} from './useYourContactLogic';

export default () => {
    const {controlIputs, handleForm, handleInputs} = useYourContactLogic()
    return (
        <form className={styles.wrapper} onSubmit={handleForm}>
            <label className={styles.labelPersonal}>Name</label>
            <input type="text" name="name" className={styles.inputPersonal} value={controlIputs.name}
                   onChange={handleInputs}
                   style={{borderBottom: controlIputs.error_name && "1px solid #ff3333"}}/>
            <label className={styles.labelPersonal}>Email</label>
            <input type="text" name="email" className={styles.inputPersonal} value={controlIputs.email}
                   onChange={handleInputs}
                   style={{borderBottom: controlIputs.error_email && "1px solid #ff3333"}}/>
            <input type="checkbox" name="gdpr" id={styles.gdpr} value={controlIputs.checked} onChange={handleInputs}/>
            <label htmlFor={styles.gdpr} className={styles.labelGdpr}
                   style={{borderBottom: controlIputs.error_gdpr && "1px solid #ff3333"}}>
                I hereby give consent for my personal data included in my application to be processed for the purposes
                of the recruitment process under the European Parliament’s and Council of the European Union Regulation
                on the Protection of Natural Persons as of 27 April 2016, with regard to the processing of personal data
                and on the free movement of such data, and repealing Directive 95/46/EC (Data Protection Directive)
            </label>
            <input type="submit" value="Send"/>
        </form>
    )
}