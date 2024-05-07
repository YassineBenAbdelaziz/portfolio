import React from 'react';
import angular from '../assets/angular.png';
import express from  '../assets/express.png';
import postgres from '../assets/postgres.png';
import spring from '../assets/spring.png';
import styles from './Skills.module.css';


const Skills = () => {
    return (
        <section id={styles.skills}>
            <h2>Skills</h2>
            <p>
                I have experience with the following technologies:
            </p>
            <ul>
                <li><img src={angular} alt='angular-logo' id={styles.angular}/></li>
                <li><img src={spring} alt='springboot-logo' id={styles.spring}/></li>
                <li><img src={express} alt='express-logo' id={styles.express}/></li>
                <li><img src={postgres} alt='postgres-logo' id={styles.postgres}/></li>

            </ul>
        </section >
    );
};

export default Skills;
