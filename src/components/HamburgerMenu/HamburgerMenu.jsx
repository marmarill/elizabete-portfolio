import React, { useState } from 'react';
import Link from 'next/link';
import styles from './HamburgerMenu.module.css'; // We will create this CSS module file next

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className={styles.hamburger} onClick={toggleMenu}>
                <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="25" y2="1" stroke="black" stroke-width="2"/>
                    <line y1="8" x2="25" y2="8" stroke="black" stroke-width="2"/>
                    <line y1="15" x2="25" y2="15" stroke="black" stroke-width="2"/>
                </svg>
            </button>
            {isOpen && (
                <div className={styles.menu}>
                    <Link href="/">
                        <a onClick={toggleMenu}>Home</a>
                    </Link>
                    <Link href="/about">
                        <a onClick={toggleMenu}>About</a>
                    </Link>
                    {/* Add more navigational links as needed */}
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
