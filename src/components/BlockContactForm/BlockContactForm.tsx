'use client';
import { FormEvent, ChangeEvent } from 'react';
import { useState } from 'react';
import Buttons from '../Buttons/Buttons';
import styles from './BlockContactForm.module.scss';
import { useTranslations } from 'next-intl';

export default function BlockContactForm() {
  const t = useTranslations('block-contact-form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email, phone });
    try {
      const response = await fetch('https://feedback.foodfutures.net/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
        }),
      });
      if (response.ok) {
        console.log(await response.json());
        alert(t('submit-success'));
        setName('');
        setEmail('');
        setPhone('');
      } else {
        console.log(response.status);
        alert(t('submit-fail'));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(t('submit-error'));
    }
  };

  return (
    <>
      <div className={styles.backform_image} id='contactUs'>
        <div className={styles.form_container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <p className={styles.contact_label}>{t('title')}</p>
            <input
              className={styles.input}
              type='text'
              placeholder={t('text-1')}
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              required
            />
            <input
              className={styles.input}
              type='text'
              placeholder={t('text-2')}
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
            />
            <input
              className={styles.input}
              type='tel'
              placeholder={t('text-3')}
              value={phone}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
              required
            />
            <Buttons type='submit' firstLine={t('button')} secondLine='' />
          </form>
        </div>
      </div>
    </>
  );
}
