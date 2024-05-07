import React from 'react';
import { useState } from 'react';
import styles from './Nav.module.css';



const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }


    return (
        <div className={styles.container} >
            <nav className={styles.desktopNav}>
                <div className={`${styles.myname}`}>
                    Yassine Ben Abdelaziz
                </div>
                <div >
                    <ul className={`${styles.links}`} >
                        <li className={styles.navItem}><a href="#about">About</a></li>
                        <li className={styles.navItem}><a href="#projects">Projects</a></li>
                        <li className={styles.navItem}><a href="#skills">Skills</a></li>
                        <li className={styles.navItem}><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>

            {/* Mobile Nav */}

            <nav className={styles.mobileNav}>
                <div className={`${styles.myname}`}>
                    Yassine Ben Abdelaziz
                </div>
                <div className={ `${styles.hamburgerMenu}`}>
                    <div className={`${styles.hamburgerIcon} ${isOpen ? styles.hamburgerIconOpen : styles.hamburgerIconClosed}`} onClick={toggleMenu}>
                        <span className={styles.burgerLine}></span>
                        <span className={styles.burgerLine}></span>
                        <span className={styles.burgerLine}></span>
                    </div>
                    <div className={`${styles.menuLinks} ${isOpen ? styles.menuLinksOpen : ""}`}>
                        <li className={styles.navItem}><a href="/" onClick={toggleMenu}>About</a></li>
                        <li className={styles.navItem}><a href="/projects" onClick={toggleMenu} >Projects</a></li>
                        <li className={styles.navItem}><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                        <li className={styles.navItem}><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    </div>
                </div>

            </nav>

        </div>
    
    );
};

export default Nav;
