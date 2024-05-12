import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';
import { RoughNotation } from 'react-rough-notation';

const Contact = () => {

    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        window.onload = () => {
            setImagesLoaded(true);
        };
    }, []);


    return (
        <footer id="contact" className={styles.footer} >
            <h1 className={styles.title}>Get in touch </h1>
            <p className={styles.text}>
                Do you have a job opportunity or an idea you want to discuss?
                Feel free to reach out to me at <span className={styles.links}><a href="mailto:yassin.benabdellaziz@gmail.com" target="_blank" rel="noopener noreferrer" ><RoughNotation type='highlight' show={imagesLoaded} multiline={true} color='#fde047'>yassin.benabdellaziz@gmail.com</RoughNotation></a></span>.
                You can also find me on  <span className={styles.links}><a href="https://www.linkedin.com/in/yassine-ben-abdelaziz/" target="_blank" rel="noopener noreferrer"><RoughNotation type='highlight' show={imagesLoaded} multiline={true} color='#06b6d4'>Linkedin</RoughNotation></a></span> and <span className={styles.links}><a href="https://github.com/YassineBenAbdelaziz" target="_blank" rel="noopener noreferrer"><RoughNotation type='highlight' show={imagesLoaded} multiline={true} color='#f87171'>Github.</RoughNotation></a></span>

            </p>
        </footer>
    );
};

export default Contact;
