import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <section id={styles.about} >

            <h1 className={styles.title}>Hello! my name is Yassine.</h1>
            <p className={styles.subtitle}>
                I'm a full-stack web developer with a passion for creating beautiful and functional websites. 
            </p>

            <div className={styles.buttons}>
                <button className={`${styles.btn} ${styles.linkedin}`}>View Linkedin</button>
                <button className={`${styles.btn} ${styles.github} `}>View Github</button>
            </div>

        </section>
    );
};

export default About;
