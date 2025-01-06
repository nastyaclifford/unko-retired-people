'use client'
import { useTranslations } from 'next-intl';
import ButtonLanguages from './ButtonLanguages';
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

  interface BurgerMenuProps {
    isOpen: boolean;  
    openBurgerMenu: () => void;  
  }

export default function BurgerMenu ({ isOpen, openBurgerMenu }: BurgerMenuProps) {
    const t = useTranslations('header');

    const handleLogoClick = () => {
        window.scrollTo(0, 0);
        openBurgerMenu();
      };

      const handleClickInsideMenu = (event: React.MouseEvent) => {
        event.stopPropagation(); 
    };

    

    return <div  onClick={openBurgerMenu} className={`${styles.burgerMenu} ${isOpen ? styles.open : ''}`} >
        <div className={styles.burgerMenu_items} onClick={handleClickInsideMenu}>
        <div className={styles.burgerMenu_items__buttons}>
        <div className={styles.buttons_item}>
        <ButtonLanguages menu={languagesList}/>
        </div>
        <div onClick={handleLogoClick} className={styles.buttons_item}>
        <Image  src='/images/Header/Logo.svg' alt='Logo' width={136} height={81} />
        </div>
        <div onClick={openBurgerMenu} className={styles.buttons_item}>
        <Image  src='/images/Header/Close.svg' alt='Close' width={24} height={24} />
        </div>
        </div>

        <div className={styles.burgerMenu_items__nav}>
        <Link onClick={openBurgerMenu} href='#infoBanner1' className={styles.nav_item}>{t('nav-item-1')}</Link>
        <Link onClick={openBurgerMenu} href="#infoBanner2" className={styles.nav_item}>{t('nav-item-2')}</Link>
        <Link onClick={openBurgerMenu} href="#learnMore" className={styles.nav_item}>{t('nav-item-3')}</Link>
        <div className={styles.nav_contacts}>
        <div>Telefon: +49 17667484911</div>
        <div>Email: cvo@unco.club</div> 
        </div>
        
                <div className={styles.nav_social}>
                    <a href="https://www.linkedin.com/company/unco-club">
                        <Image src='/images/Footer/LinkedIn.png' alt='Linkeding' width={60} height={60} />
                    </a>
                    <a href="https://www.instagram.com/uff_eu">
                        <Image src='/images/Footer/Instagram.png' alt='Instagram' width={60} height={60} />
                    </a>
                    <a href="https://t.me/UNCOFOODFUTURES_eng">
                        <Image src='/images/Footer/Telegram.png' alt='Telegram'width={60} height={60} />
                    </a>
                    <a href="https://www.youtube.com/@UNCOFoodFutures">
                        <Image src='/images/Footer/YouTube.png' alt='Youtube' width={60} height={60} />
                    </a>
                    <a href="https://twitter.com/UncoClub">
                        <Image src='/images/Footer/Twitter.png' alt='Twitter' width={60} height={60} />
                    </a>
                    <a href="https://www.facebook.com/share/g/D2K3RZ7RDtemx9Tq">
                        <Image src='/images/Footer/Facebook.png' alt='Facebook' width={60} height={60} />
                    </a>
                </div>
              
                    
                </div>
    </div>
    </div>
}
