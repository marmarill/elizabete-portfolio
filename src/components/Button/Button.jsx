import styles from './Button.module.css'

export default function Button({children, onClick, enabled, size}) {

  return (
    <button
      className={`${styles.button} ${enabled ? styles.enabled : ''} ${size === 'small' ? styles.small : ''} }`}
      onClick={onClick}
      
    >
      {children}
    </button>
  );
}