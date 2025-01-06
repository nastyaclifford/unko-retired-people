'use client';
import styles from './BlockLearnMore.module.scss';
import Buttons from '../Buttons/Buttons';
import { useTranslations } from 'next-intl';

export default function BlockLearnMore() {
  const t = useTranslations('block-learn-more');
  return (
    <>
      <div className={styles.lernmore_container} id='learnMore'>
        <div className={styles.lernmore_text}>
          <p>
            {t('text-1')}
            <strong>{t('text-2-bold')}</strong>
            {t('text-3')}
            <strong>{t('text-4-bold')}</strong>
            {t('text-5')}
          </p>
          <p>
            {t('text-6')}
            <em>{t('text-7-italic')}</em>
            {t('text-8')}
            <em>{t('text-9-italic')}</em>
            {t('text-10')}
            <strong>{t('text-11-bold')}</strong>
            {t('text-12')}
          </p>
        </div>
        <div className={styles.button_container}>
          <a href='https://unco.bio/ru'>
            <Buttons
              type='submit'
              firstLine={t('button-first-line')}
              secondLine={t('button-second-line')}
            />
          </a>
        </div>
      </div>
    </>
  );
}
