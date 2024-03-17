"use client"
import Link from 'next/link'
import styles from './Header.module.css'
import { useScroll } from '@/context/Scroll'
import { useRouter, usePathname} from 'next/navigation'
import { useTransition } from "react";

 
export default function Header() {

  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition();


  console.log('router.pathname', pathname)

  const isHomePage = pathname === '/';
   
  const { scrollToElement } = useScroll()

  // TODO: fix this when going from a project page to main homepage
  const goToSection = (id) => {
    if (isHomePage) {
      scrollToElement(id)
    } else {
      router.push(`/#${id}`, { scroll: false })
      scrollToElement(id)
    }
  }

  return (    
    <header className={styles.header}>

      <Link href="/">
        <p className={styles.linkToHome}>elizabetebusevica.com</p>
      </Link>

        <div className={styles.headerButtons}>
          <a className={styles.headerButton} onClick={() => {goToSection('approach')}}>Approach</a>
          <a className={styles.headerButton} onClick={() => {goToSection('projects')}}>Projects</a>
          <a className={styles.headerButton} onClick={() => {goToSection('contacts')}}>Contacts</a>
        </div>  
    </header>
  )
}


