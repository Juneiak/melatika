import styles from './custom-button.module.css';

export default function CustomButton({ clicHandler, text }) {

  return (
    <button
      className={styles.button}
      type='button'
      onClick={clicHandler}
    >{text}</button>
  )
}