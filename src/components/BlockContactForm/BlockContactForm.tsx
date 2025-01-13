import { useTranslations } from 'next-intl';
import styles from './BlockContactForm.module.scss';
import { Form } from './Form';

export default function BlockContactForm() {
  const t = useTranslations('block-contact-form');

  return (
    <div className={styles.backform_image} id='contactUs'>
      <div className={styles.form_container}>
        <Form />
      </div>
    </div>
  );
}
