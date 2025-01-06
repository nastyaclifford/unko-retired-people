'use client'

import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from "./Header.module.scss";
import { useRouter, usePathname  } from '@/i18n/routing';

type MenuItem = { text: string; code: string };

type Props = {
  menu: MenuItem[];
};

export default function ButtonLanguages ({ menu }: Props) {
    
    const [languagesMenu, setLanguagesMenu] = useState(false);
    const [isOpenLanguage, setIsOpenLanguage] = useState(false);
    const buttonRef = useRef<HTMLDivElement | null>(null);
    const languageMenuRef = useRef<HTMLUListElement | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    const toggleDropdown = () => {
        setLanguagesMenu(prevState => !prevState);
    };

    const handleChange = (event: React.MouseEvent<HTMLLIElement>) => {
        const nextLocale = event.currentTarget.dataset.code as string;
        router.replace({ pathname }, { locale: nextLocale });
        setIsOpenLanguage(false);
      };
    

    return (
    <>
    <div className={styles.languages} onClick={toggleDropdown}>
        <Image  className={styles.languages_button} src='/images/Header/Languages.svg' alt='languages' width={30} height={30} />
        {languagesMenu && (
                        <div className={styles.languages_menu}>
                            <ul>
                            {menu.map(({ text, code }) => (
              <li
                key={code}
                data-code={code}
                className={styles.languages__item}
                onClick={handleChange}
              >
                {text}
              </li>
            ))}
                            </ul>
                        </div>
                    )}
        </div></>
        
                )
}
