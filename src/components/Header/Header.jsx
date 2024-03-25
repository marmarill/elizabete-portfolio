"use client"
import Link from 'next/link'
import styles from './Header.module.css'
import { useScroll } from '@/context/Scroll'
import { useRouter, usePathname} from 'next/navigation'

 
export default function Header() {

  const pathname = usePathname()

  const isHomePage = pathname === '/';
   
  const { scrollToElement } = useScroll()

  return (    
    <header className={styles.header}>

      <Link href="/" className={styles.logoWrapper}>
        <p className={styles.linkToHome}>elizabetebusevica.com</p>
      </Link>

      <div className={styles.burger} onClick={() => {
        // TODO: open modal for the buttons that are being hidden
      }}>
        <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="1" x2="25" y2="1" stroke="black" stroke-width="2"/>
          <line y1="8" x2="25" y2="8" stroke="black" stroke-width="2"/>
          <line y1="15" x2="25" y2="15" stroke="black" stroke-width="2"/>
        </svg>
      </div>
      <div className={styles.headerButtons}>
        {isHomePage ? 
        <>
          <a className={styles.headerButton} onClick={() => {scrollToElement('approach')}}>Approach</a>
          <a className={styles.headerButton} onClick={() => {scrollToElement('projects')}}>Projects</a>
          <a className={styles.headerButton} onClick={() => {scrollToElement('contacts')}}>Contacts</a>
        </>
        :
        <>
          <Link className={styles.headerButton} href="/#approach">Approach</Link>
          <Link className={styles.headerButton} href="/#projects">Projects</Link>
          <Link className={styles.headerButton} href="/#contacts">Contacts</Link>
        </>
        }
      </div>  
    </header>
  )
}


