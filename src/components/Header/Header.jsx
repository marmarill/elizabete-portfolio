"use client"
import Link from 'next/link'
import styles from './Header.module.css'
import { useScroll } from '@/context/Scroll'
import { useRouter, usePathname} from 'next/navigation'

 
export default function Header() {

  const router = useRouter()
  const pathname = usePathname()

  const isHomePage = pathname === '/';
   
  const { scrollToElement } = useScroll()

  return (    
    <header className={styles.header}>

      <Link href="/">
        <p className={styles.linkToHome}>elizabetebusevica.com</p>
      </Link>

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


