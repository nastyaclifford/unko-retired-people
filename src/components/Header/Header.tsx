'use client'
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import ButtonLanguages from './ButtonLanguages';
import BurgerMenu from './BurgerMenu';
import Image from 'next/image';
import Link from 'next/link';
import styles from "./Header.module.scss";

const languagesList = [
    { text: 'English', code: 'en' },
    { text: 'Русский', code: 'ru'},
    { text: 'Deutsche', code: 'de'},
    { text: 'Українська', code: 'uk' },
    { text: 'Français', code: 'fr' },
    { text: 'Español', code: 'es' },
    { text: 'Italiano', code: 'it'},
  ];

export default function Header () {
    const [isOpen, setIsOpen] = useState(false); 
    const [isScrolled, setIsScrolled] = useState(false);
    const t = useTranslations('header');

    const handleLogoClick = () => {
        window.scrollTo(0, 0);
      };

      const openBurgerMenu = () => {
        setIsOpen(!isOpen);  
      };

      const handleScroll =() => {
        if (window.scrollY > 0) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      useEffect (() => {
        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
      }, [])

    return <div className={styles.header}>
        <div className={`${styles.nav} ${isScrolled? styles.navScrolled : ""}`}>
        <Link href='#infoBanner1' className={styles.nav_item}>{t('nav-item-1')}</Link>
        <Link href="#infoBanner2" className={styles.nav_item}>{t('nav-item-2')}</Link>
        <div onClick={handleLogoClick} className={styles.nav_item}>
        <Image  className={styles.nav_logo} src='/images/Header/Logo.svg' alt='Logo' width={136} height={81} />
        </div>
        <Link href="#learnMore" className={styles.nav_item}>{t('nav-item-3')}</Link>
        <div className={styles.nav_item}>
        <ButtonLanguages menu={languagesList}/>
        </div>
        <Link href="#contactUs"><button className={styles.nav_item__button}>{t('button')}</button></Link>
        
    </div>

    <div className={`${styles.navMobile} ${isScrolled? styles.navMobileScrolled : ""}`} >

    <a href="tel:+49 17667484911" aria-label="Call us" className={styles.navMobile_item__round}> 
    <Image  className={styles.navMobile_item__imgPh} src='/images/Header/Phone.svg' alt='Phone' width={24} height={24}/>
    </a>
    

   
    <div onClick={handleLogoClick} className={styles.navMobile_item}>
        <Image  src='/images/Header/Logo.svg' alt='Logo' width={136} height={81} />
        </div>
    <div onClick={openBurgerMenu} className={styles.navMobile_item__round}>
    <Image  className={styles.navMobile_item__imgMn} src='/images/Header/Menu.svg' alt='Menu' width={28} height={18}/>
    <BurgerMenu isOpen={isOpen} openBurgerMenu={openBurgerMenu}/> 
    </div>
    </div>
  
    </div>
    
}