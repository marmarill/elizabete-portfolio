'use client'
import styles from './ModalMenu.module.css'
import React from 'react'
import { useScroll } from '@/context/Scroll'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const ModalMenu = ({ isOpen, closeModal }) => {
    const { scrollToElement } = useScroll()
    const pathname = usePathname()
    const isHomePage = pathname === '/';

    if (!isOpen) {
        return null
    } else {
        const handleClick = (section) => {
            closeModal();
            scrollToElement(section);
        };

        return (
            <div className={styles.modalOverlay}>
                <div className={styles.top}>
                    <a href="/" className={styles.homeButton}>elizabetebusevica.com</a>
                    <button onClick={closeModal} className={styles.button}>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2929 18.7072L0.292906 1.70718L1.70712 0.292969L18.7071 17.293L17.2929 18.7072Z" fill="black" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.70709 18.7072L18.7071 1.70718L17.2929 0.292969L0.292877 17.293L1.70709 18.7072Z" fill="black" />
                        </svg>
                    </button>
                </div>
                <div className={styles.modalContent}>
                {isHomePage ?
                <>
                    <a className={styles.link} onClick={() => { handleClick('approach') }}>Approach</a>
                    <a className={styles.link} onClick={() => { handleClick('projects') }}>Projects</a>
                    <a className={styles.link} onClick={() => { handleClick('contacts') }}>Contacts</a>
                    <a className={styles.link} href="cv">CV</a>
                </>
                    :
                <>
                    <Link href="/#approach">Approach</Link>
                    <Link href="/#projects">Projects</Link>
                    <Link href="/#contacts">Contacts</Link>
                    <Link href="/cv">CV</Link>
                </>
                }
                </div>
            </div>
        )
    }
}

    export default ModalMenu;
