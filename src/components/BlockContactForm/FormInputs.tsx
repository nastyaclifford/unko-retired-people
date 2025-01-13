import { UseFormRegister, FieldErrors } from 'react-hook-form';
import styles from './BlockContactForm.module.scss';
import { useTranslations } from 'next-intl';

type FormData = {
  name: string;
  email: string;
  phone: string;
};

type Props = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

export const FormInputs = ({ register, errors }: Props) => {
  const t = useTranslations('block-contact-form');

  return (
    <>
      <input
        className={`${styles.input} ${errors.name ? styles.error : ''}`}
        type='text'
        placeholder={t('text-1')}
        {...register('name', {
          required: 'Name is required',
          minLength: { value: 2, message: 'Name must be at least 2 characters' },
        })}
      />
      {errors.name && <p className={styles.error_message}>{errors.name.message}</p>}

      <input
        className={`${styles.input} ${errors.email ? styles.error : ''}`}
        type='email'
        placeholder={t('text-2')}
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })}
      />
      {errors.email && <p className={styles.error_message}>{errors.email.message}</p>}

      <input
        className={`${styles.input} ${errors.phone ? styles.error : ''}`}
        type='tel'
        placeholder={t('text-3')}
        {...register('phone', {
          required: 'Phone number is required',
          pattern: {
            value: /^\+?[0-9]{10,15}$/,
            message: 'Invalid phone number',
          },
        })}
      />
      {errors.phone && <p className={styles.error_message}>{errors.phone.message}</p>}
    </>
  );
};
