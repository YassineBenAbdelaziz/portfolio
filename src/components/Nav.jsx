import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Nav.module.css';
import {  useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Nav = ( { aboutRef, contactRef }) => {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();



    const navigateTo = (path) => {
        navigate(path);
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
 

    const location = useLocation();
    const isHomePage = location.pathname === '/';


    return (
        <div className={styles.container} >
            <nav className={styles.desktopNav}>
                <div className={`${styles.myname}`} onClick={()=> navigateTo('/')} >
                    Yassine Ben Abdelaziz
                </div>
                <div >
                    <ul className={`${styles.links}`} >
                        <li className={styles.navItem} ><Link to="/">Home</Link></li>
                        <li className={styles.navItem} ><Link to="/#about">About</Link></li>
                        <li className={styles.navItem} ><Link to="/projects">Projects</Link></li>
                        <li className={styles.navItem} ><Link to="/#contact">Contact</Link></li>
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
                        <li className={styles.navItem}><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li className={styles.navItem} ><Link to="/#about" onClick={toggleMenu}>About</Link></li>
                        <li className={styles.navItem} ><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
                        <li className={styles.navItem} ><Link to="/#contact" onClick={toggleMenu}>Contact</Link></li>
                    </div>
                </div>

            </nav>

        </div>
    
    );
};

export default Nav;
