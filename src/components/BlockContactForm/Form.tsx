'use client';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import styles from './BlockContactForm.module.scss';
import { FormInputs } from './FormInputs';
import Buttons from '../Buttons/Buttons';
import { useReCaptcha } from 'next-recaptcha-v3';

type FormData = {
  name: string;
  email: string;
  phone: string;
};

export const Form = () => {
  const t = useTranslations('block-contact-form');
  const { executeRecaptcha } = useReCaptcha();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const token = await executeRecaptcha('form_submit');

      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('g-recaptcha-response', token);

      const response = await fetch('https://feedback.foodfutures.net/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        alert(t('submit-success'));
        reset();
      } else {
        alert(t('submit-fail'));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(t('submit-error'));
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={styles.contact_label}>{t('title')}</p>
      <FormInputs register={register} errors={errors} />
      <Buttons type='submit' firstLine={t('button')} secondLine='' />
    </form>
  );
};
