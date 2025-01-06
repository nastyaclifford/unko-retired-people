'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import React from 'react';
import Slider from 'react-slick';
import styles from './Sliders.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

export default function Sliders() {
  const t = useTranslations();
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAnswer = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    fade: true,
    rows: 2,
    adaptiveHeight: true,
    arrow: false,
  };
  return (
    <>
      <div className={styles.slider_container}>
        <div className={styles.slider}>
          <Slider {...settings}>
            {collapsibleData.map((item) => (
              <div key={item.id}>
                <div className={styles.slider_question}>
                  <h3 className={styles.slider_text}>{t(item.question)}</h3>
                  <button onClick={() => toggleAnswer(item.id)} className={styles.slider_button}>
                    {openId === item.id ? '−' : '+'}
                  </button>
                </div>

                {openId === item.id && (
                  <div className={styles.slider_answer}>
                    <p>{t(item.answer)}</p>
                  </div>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
