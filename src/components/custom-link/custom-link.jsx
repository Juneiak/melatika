import React from 'react';
import styles from './custom-link.module.css';

export default function CustomLink({ href, text }) {
  return (
    <a href={href} className={styles.link}>
      {text}
    </a>
  )
}