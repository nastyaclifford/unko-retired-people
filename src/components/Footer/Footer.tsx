import Image from "next/image"
import styles from "./Footer.module.scss"
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer () {
    const translate = useTranslations('footer');
    
    return (
        <div className={styles.footer}>
            <p className={styles.footer__txt}>
                All rights reserved. Any parts of this presentation are subject to change by the owner at any time without prior notice. This presentation or parts of it does not form a business proposal or part of a contract. Items are approximate and subject to negotiation. Any copying and use for commercial purposes requires the written consent of the copyright holder.
                <br />
                <br />
                *All figures, designations, abbreviations and data in this web pages are solely for the purpose of explaining the pattern of operation, are not based on actual facts and events and may not be used for any other purpose (including but not limited to: investment decisions, buying, education, predictions) other than a general understanding of the business model. Trading services are provided by third-party companies under the relevant agreements and licenses of the respective countries where the sales and other transactions take place. Past performance is not a reliable indicator of future results. Your returns may increase or decrease as a result of currency fluctuations. Your capital is at risk. View Trading Disclosures on the websites of the respective trading platforms.
            </p>
            <div className={styles.footer__item}>
                <Image src='/images/Header/Logo.svg' alt='logo' width={136} height={81} />
                <div className={styles.footer__topics}>
                <Link className={styles.menu} href='#infoBanner1'>{translate("menu.nav-item-1")}</Link>
                    <Link className={styles.menu} href="#infoBanner2">{translate("menu.nav-item-2")}</Link>
                    <Link className={styles.menu} href="#learnMore">{translate("menu.nav-item-3")}</Link>
                </div>
            </div>
            <div className={styles.footer__legalinfo}>
                <div className={styles.footer__legalinfo_leftItem}> 
                    <span>Impressum</span>
                    <span>Datenschutz</span>
                    <span>Ruckgaberecht</span>
                    <span>AGB</span>
                </div>
                <div className={styles.footer__legalinfo_rigthItem}>                  
                    <ul>
                        <Image src='/images/Footer/footer_icon.svg' alt='logo' width={21} height={30} />
                        <a href="https://foodnft.org">NFT UNCO888</a>
                    </ul>
                    <ul>
                        <Image src='/images/Footer/footer_icon.svg' alt='logo' width={21} height={30} />
                        <a href="https://foodfutures.net/en">UFF investieren</a>
                    </ul>
                    <ul>
                        <Image src='/images/Footer/footer_icon.svg' alt='logo' width={21} height={30} />
                        <a href="https://unco.bio/ru">UNCO-Ökopunkte</a>                    
                    </ul>
                    <ul>
                        <Image src='/images/Footer/footer_icon.svg' alt='logo' width={21} height={30} />
                        <a href="https://foodfutures.net/en">UNCO Austausch</a>                    
                    </ul>
                    <ul>
                        <Image src='/images/Footer/footer_icon.svg' alt='logo' width={21} height={30} />
                        <a href="https://foodfutures.net/en">UNCO Lebensmittel-Futures</a>                    
                    </ul>
                </div>
                <div className={styles.footer__legalinfo_rigthItem}>
                    <ul>
                        <Image src='/images/Footer/footer_icon.svg' alt='logo' width={21} height={30} />
                        <a href="https://unco.trade/en">UFF für Produzenten</a>
                    </ul>
                    <ul>
                        <Image src='/images/Footer/footer_icon.svg' alt='logo' width={21} height={30} />
                        <a href="https://unco.club">UFF für Endkunden</a>
                    </ul>
                    <ul>
                        <Image src='/images/Footer/footer_icon.svg' alt='logo' width={21} height={30} />
                        <a href="https://rowfresh.com">UFF für Einzelhandel</a>
                    </ul>
                    <ul>
                        <Image src='/images/Footer/footer_icon.svg' alt='logo' width={21} height={30} />
                        <a href="https://unco.club">Für Endkunden</a>
                    </ul>
                </div>
            </div>
            <div className={styles.footer__contacts}>                         
                <div className={styles.footer__social}>
                    <a href="https://www.linkedin.com/company/unco-club">
                        <Image className={styles.socialIcon} src='/images/Footer/LinkedIn.png' alt='eco point' width={80} height={80} />
                    </a>
                    <a href="https://www.instagram.com/uff_eu">
                        <Image className={styles.socialIcon} src='/images/Footer/Instagram.png' alt='eco point' width={80} height={80} />
                    </a>
                    <a href="https://t.me/UNCOFOODFUTURES_eng">
                        <Image className={styles.socialIcon} src='/images/Footer/Telegram.png' alt='eco point' width={80} height={80} />
                    </a>
                    <a href="https://www.youtube.com/@UNCOFoodFutures">
                        <Image className={styles.socialIcon} src='/images/Footer/YouTube.png' alt='eco point' width={80} height={80} />
                    </a>
                    <a href="https://twitter.com/UncoClub">
                        <Image className={styles.socialIcon} src='/images/Footer/Twitter.png' alt='eco point' width={80} height={80} />
                    </a>
                    <a href="https://www.facebook.com/share/g/D2K3RZ7RDtemx9Tq">
                        <Image className={styles.socialIcon} src='/images/Footer/Facebook.png' alt='eco point' width={80} height={80} />
                    </a>
                </div>
                <div className={styles.footer__support__info}>
                    <div>
                        <span>Telefon: +49 17667484911</span>
                        <span>Email: cvo@unco.club</span> 
                    </div>
                    <p>
                        {translate("menu.text")}
                    </p>
                    <p>
                        UNCO CLUB GmbH Westerbachstr. 47, 60489 
                        <br />
                        Frankfurt am Main Deutschland
                    </p>
                </div>
            </div>
        </div>
    )
}