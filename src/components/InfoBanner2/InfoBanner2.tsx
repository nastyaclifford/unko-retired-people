import styles from './InfoBanner2.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function InfoBanner2() {
  const t = useTranslations('info-banner2');

  return (
    <>
      <div className={styles.container_gift}>
        <div className={styles.image1}>
          <Image
            className={styles.image2}
            src='/images/InfoBanner2/block3.png'
            alt='people'
            width={569}
            height={569}
            layout='responsive'
          />
        </div>

        <h2 className={styles.title}>{t('section-1.title-1')}</h2>

        <p className={styles.text}>{t('section-1.text-1')}</p>
      </div>

      <div className={styles.steps} id='infoBanner2'>
        <div className={styles.steps_container}>
          <div className={styles.steps_info}>
            <h2 className={styles.steps_title}>{t('section-2.title-2')}</h2>
            <p className={styles.steps_text}>{t('section-2.text-2')}</p>
          </div>

          <div className={styles.steps_grid}>
            <div className={styles.step_image1}>
              <Image
                className={styles.image4}
                src='/images/InfoBanner2/block4.png'
                alt='friends image'
                width={570}
                height={570}
                layout='responsive'
              />
            </div>
            <div className={styles.step1}>
              <h2 className={styles.step1_title}>{t('section-3.subsection-1.title-1')}</h2>
              <p className={styles.step1_text}>{t('section-3.subsection-1.text-1')}</p>
            </div>
            <div className={styles.step2}>
              <h2 className={styles.step2_title}>{t('section-3.subsection-2.title-2')}</h2>
              <p className={styles.step2_text}>{t('section-3.subsection-2.text-2')}</p>
            </div>
            <div className={styles.step_image2}>
              <Image
                className={styles.image5}
                src='/images/InfoBanner2/block5.png'
                alt='gift image'
                layout='responsive'
                width={570}
                height={570}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
