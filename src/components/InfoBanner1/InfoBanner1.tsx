'use client';
import React, { useEffect } from 'react';
import styles from './InfoBanner1.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function InfoBanner1() {
  const t = useTranslations('info-banner1');
  const keys = ['section-1', 'section-2', 'section-3'];

  const substr = t('substr').split(';');
  useEffect(() => {
    const description = document.querySelectorAll('#description');
    if (description) {
      substr.forEach((element) => {
        description.forEach((el) => {
          el.innerHTML = el.innerHTML.replace(new RegExp(element), '<span>' + element + '</span>');
        });
      });
    }
  }, []);
  return (
    <section className={styles.section} id='infoBanner1'>
      <h2 className={styles.title}>{t('title')}</h2>
      <p className={styles.pharagraph}>{t('text')}</p>
      <div className={styles.containers}>
        {keys.map((data, i) => (
          <div className={styles.container} key={data}>
            <div className={styles.counter_container}>
              <Image
                src='/images/InfoBanner1/Ellipse.svg'
                alt={'Ellipse'}
                className={styles.ellipse}
                width={96}
                height={96}
              />
              <h1 className={styles.counter}>{i + 1}</h1>
            </div>
            <h2 className={styles.subtitle}>{t(`${data}.subtitle-${i + 1}`)}</h2>
            <p className={styles.description} id='description'>
              {t(`${data}.text-${i + 1}`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
