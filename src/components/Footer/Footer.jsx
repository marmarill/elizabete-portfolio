import React, { useRef, useEffect } from 'react';
import { useScroll } from '@/context/Scroll';
import styles from './Footer.module.css'


export default function Footer() {
  const id = 'contacts'
  const scrollRef = useRef(null);
  const { registerElement } = useScroll();

  useEffect(() => {
    registerElement(id, scrollRef.current);
  }, [id, registerElement]);


  return (
    <div className={styles.footerContainer} id={id} ref={scrollRef}>
      <p className={styles.headerCallToAction}>Let’s work together!</p>
        <div className={styles.subContainer}>
          <div className={styles.contactsContainer}>
            <p className={styles.contacts}>Contacts</p>
            <p className={styles.email}>elizabetebusevica@gmail.com</p>
          </div>
          <div className={styles.followContainer}>
            <p className={styles.follow}>Follow me</p>
            <p className={styles.social}>Ig Be Li</p>
          </div>     
        </div>
    </div>
  )
}