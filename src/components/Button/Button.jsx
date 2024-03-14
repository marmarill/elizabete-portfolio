import styles from './Button.module.css'

export default function Button({children, onClick, enabled}) {
  console.log(enabled)
  return (
    <button
      className={`${styles.button} ${enabled ? styles.enabled : ''}`}
      onClick={onClick}
      
    >
      {children}
    </button>
  );
}