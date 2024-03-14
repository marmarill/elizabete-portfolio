import styles from './Header.module.css'

export default function Header() {
  return (
    
    <header className={styles.header}>

      <p className={styles.linkToHome}>elizabetebusevica.com</p>
        <div className={styles.headerButtons}>
          <a className={styles.headerButton}>Approach</a>
          <a className={styles.headerButton}>Projects</a>
          <a className={styles.headerButton}>Contacts</a>
        </div>  
    </header>
  )
}
