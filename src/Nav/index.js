import React,{useState} from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './index.module.scss';
import { useMediaQuery } from 'react-responsive';
import bars from '../assets/images/bars-solid.svg';
import close from '../assets/images/times-solid.svg';

export default () => {
    const [isMenuOpen, setIsMenuOpen]=useState(false)
    const isMobileDevice = useMediaQuery({
        query: '(max-width: 550px)'
    })
    const handleMenuIcon=()=>{
        if (isMobileDevice){
        if (!isMenuOpen) {
            return <img src={bars} className={styles.bars} onClick={()=>setIsMenuOpen(!isMenuOpen)}/>
        } else {
            return <img src={close} className={styles.close} onClick={()=>setIsMenuOpen(!isMenuOpen)}/>
        }
    }}
    return (
        <header className={styles.navigation}>

            <div className={`${styles.contentWrapper} container`}>
                <span className={styles.logo}>BestShop</span>
                {handleMenuIcon()}
                <ul className={`${styles.menu} ${styles.mobileMenu}`} style={{ display: isMobileDevice && !isMenuOpen && "none" }} >
                    <li>
                        <ScrollLink to="opening" spy={true} smooth={true} offset={50} duration={500}
                                    onClick={()=>setIsMenuOpen(false)}>WHY US</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="benefits" spy={true} smooth={true} offset={50} duration={500}
                                    onClick={()=>setIsMenuOpen(false)}>BENEFITS</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="pricing" spy={true} smooth={true} offset={50} duration={500}
                                    onClick={()=>setIsMenuOpen(false)}>PRICES</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="contact" spy={true} smooth={true} offset={50} duration={500}
                                    onClick={()=>setIsMenuOpen(false)}>CONTACT</ScrollLink>
                    </li>
                </ul>
            </div>

        </header>
    )
} 