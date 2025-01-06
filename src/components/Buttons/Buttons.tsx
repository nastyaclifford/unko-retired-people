import styles from './Buttons.module.scss';

interface ButtonProps {
  firstLine: string;
  secondLine: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Buttons({ firstLine, secondLine, type = 'button' }: ButtonProps) {
  return (
    <>
      <div>
        <button type={type} className={styles.buttons}>
          {firstLine}
          <br />
          {secondLine}
        </button>
      </div>
    </>
  );
}
