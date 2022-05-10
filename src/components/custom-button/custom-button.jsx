import React from 'react';
import styles from './custom-button.module.css';
import { useState } from 'react'

export default function CustomButton({ clicHandler, text }) {

  const [ isHold, setIsHold ] = useState(false)
  const [ timer, setTimer ] = useState(false)

  const handleHold = () => {
    setIsHold(true)
    const timer = setTimeout(() => {
      setIsHold(false);
      clicHandler()
    }, 1200)
    setTimer(timer);
  }
  const handleStopHold = () => {
    setIsHold(false)
    if (timer) {
      clearTimeout(timer);
      setTimer(false)
    }
  }

  return (
    <button
      className={`${styles.button} ${isHold ? styles.buttonHold : ''}`}
      type='button'
      onMouseDown={handleHold}
      onMouseUp={handleStopHold}
    >{text}</button>
  )
}