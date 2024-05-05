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
        <>
            <nav className={styles.desktopNav}>
                <div className={`${styles.myname}`}>
                    Yassine Ben Abdelaziz
                </div>
                <div >
                    <ul className={`${styles.links}`} >
                        <li className=""><a href="#about">About</a></li>
                        <li className=""><a href="#projects">Projects</a></li>
                        <li className=""><a href="#skills">Skills</a></li>
                        <li className=""><a href="#contact">Contact</a></li>
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
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`${styles.menuLinks} ${isOpen ? styles.menuLinksOpen : ""}`}>
                        <li className=""><a href="#about" onClick={toggleMenu}>About</a></li>
                        <li className=""><a href="#projects" onClick={toggleMenu} >Projects</a></li>
                        <li className=""><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                        <li className=""><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    </div>
                </div>

            </nav>


        </>
    );
};

export default Nav;
