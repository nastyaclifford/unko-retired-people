'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './CollapsibleElements.module.scss';

interface CollapsibleElements {
  id: number;
  question: string;
  answer: string;
}

const collapsibleData: CollapsibleElements[] = [
  {
    id: 1,
    question: 'collapsible-elements.element-1.question-1',
    answer: 'collapsible-elements.element-1.answer-1',
  },
  {
    id: 2,
    question: 'collapsible-elements.element-2.question-2',
    answer: 'collapsible-elements.element-2.answer-2',
  },
  {
    id: 3,
    question: 'collapsible-elements.element-3.question-3',
    answer: 'collapsible-elements.element-3.answer-3',
  },
  {
    id: 4,
    question: 'collapsible-elements.element-4.question-4',
    answer: 'collapsible-elements.element-4.answer-4',
  },
  {
    id: 5,
    question: 'collapsible-elements.element-5.question-5',
    answer: 'collapsible-elements.element-5.answer-5',
  },
  {
    id: 6,
    question: 'collapsible-elements.element-6.question-6',
    answer: 'collapsible-elements.element-6.answer-6',
  },
];

export default function CollapsibleElements() {
  const t = useTranslations();
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAnswer = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <div className={styles.collapsible_container}>
        {collapsibleData.map((item) => (
          <div key={item.id}>
            <div className={styles.collapsible_question}>
              <h3 className={styles.item_question}>{t(item.question)}</h3>
              <button onClick={() => toggleAnswer(item.id)} className={styles.collapsible_button}>
                {openId === item.id ? '−' : '+'}
              </button>
            </div>

            {openId === item.id && (
              <div className={styles.collapsible_answer}>
                <p>{t(item.answer)}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
