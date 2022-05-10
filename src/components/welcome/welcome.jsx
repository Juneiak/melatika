import React from 'react';
import styles from './welcome.module.css';
import FirstSofa from '../sofas/first-sofa';
import SecondSofa from '../sofas/second-sofa';
import { useState } from 'react';
import CustomButton from '../custom-button/custom-button';

export default function Welcome() {

  const [ isSecondModel, setIsSecondModel ] = useState(false);

  return (
    <main className={styles.welcome}>
      <div className={styles.content}>
        <div className={styles.model}>
          {isSecondModel ? <SecondSofa /> : <FirstSofa />}
        </div>
        <div className={styles.about}>
          <h1 className={styles.title}>Melatika</h1>
          <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor voluptatem accusantium! Adipisci officiis aliquid soluta tempora doloribus? Ex nihil fugiat quaerat placeat voluptatum blanditiis magnam pariatur optio. Eveniet, deleniti!</p>
          <CustomButton text='Нажми меня!' clicHandler={() => setIsSecondModel(!isSecondModel)}/>
        </div>
      </div>
    </main>
  )
}