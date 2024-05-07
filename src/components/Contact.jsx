import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <footer id="contact" className={styles.footer} >
            <h1 className={styles.title}>Get in touch </h1>
            <p className={styles.text}>
                Do you have a job opportunity or an idea you want to discuss?
                <br />
                <br />
                Feel free to reach out to me at <span className={styles.links}><a href="mailto:yassin.benabdellaziz@gmail.com" ><strong>yassin.benabdellaziz@gmail.com</strong></a></span>.
                You can also find me on  <span className={styles.links}><a href=""><strong>Linkedin</strong></a></span> and <span className={styles.links}><a href=""><strong>Github</strong></a></span>.

            </p>
        </footer>
    );
};

export default Contact;
