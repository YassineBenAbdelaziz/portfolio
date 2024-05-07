import React , { useState} from 'react';
import styles from './About.module.css';
import { RoughNotation } from "react-rough-notation";

const About = () => {

    const [state, setState] = useState({ show: false });

    return (
        <section id="about" >

            <h1 className={styles.title}>Hello, my name is Yassine.</h1>
            <h2 className={styles.subtitle}>
                {/*I'm a full-stack web developer with a passion for creating beautiful and functional websites. */}
                I'm a full-stack web developer who thrives on tackling  <RoughNotation type="underline" show={true} color='red' strokeWidth={2} multiline={true} > complex challenges 
                    </RoughNotation> and transforming them into <RoughNotation type="underline" show={true} color='green' strokeWidth={2} multiline={true}> elegant solutions.</RoughNotation> 
                <br/>
                <br/>
                {/*As an engineer, I bring a critical eye and a problem-solving mindset to everything I do. This translates to a seamless adaptation to new tools and frameworks
                <br/>
                <br/>*/}
                I'm currently looking for <RoughNotation type='underline' show={true} color='blue' strokeWidth={2} multiline={true}>  new opportunities  </RoughNotation>  , so feel free to reach out if you think I'd be a good fit for your team!
                
            </h2>

            <div className={styles.buttons}>
                <a href="https://www.linkedin.com/in/yassine-ben-abdelaziz/" target="_blank" rel="noopener noreferrer">
                <button className={`${styles.btn} ${styles.linkedin}`}>View Linkedin</button>
                </a>
                <a href="https://github.com/YassineBenAbdelaziz" target="_blank" rel="noopener noreferrer">
                <button className={`${styles.btn} ${styles.github} `}>View Github</button>
                </a>
            </div>

        </section>
    );
};

export default About;
