import { useTranslations } from 'next-intl'; 
import styles from './Intro.module.scss';

export default function Intro() {
  const t = useTranslations('intro');
  return (
    <>
      <div className={styles.intro}>
      <p className={styles.intro_title}>{t('title')}</p>
      <p className={styles.intro_text}>{t('text')}</p>
      </div>
    </>
  );
}
