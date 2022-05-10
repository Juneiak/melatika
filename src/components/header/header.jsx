import React from 'react';
import styles from './header.module.css';
import CustomLink from '../custom-link/custom-link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <ul className={styles.leftList}>
          <li className={styles.listElement}><CustomLink text='Каталог' href='#' /></li>
          <li className={styles.listElement}><CustomLink text='Наши проекты' href='#' /></li>
          <li className={styles.listElement}><CustomLink text='Сотрудничества' href='#' /></li>
        </ul>
        <div className={styles.logo}><span>Melatika</span></div>
        <ul className={styles.rightList}>
          <li className={styles.listElement}><CustomLink text='О нас' href='#' /></li>
          <li className={styles.listElement}><CustomLink text='Гарантии' href='#' /></li>
          <li className={styles.listElement}><CustomLink text='Мои заказы' href='#' /></li>
        </ul>
      </div>
    </header>
  )
}