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
                ☰
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
