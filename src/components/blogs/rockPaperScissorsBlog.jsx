import styles from '../Blog.module.css';

const content = (
    <div>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <hr className={styles.divider} />
        <p className={styles.sectionParagraph}>
            This project is a simple Rock, Paper, Scissors game.
            <br />
            This project is part of <a className={styles.links} href="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer" >The Odin Project</a> curriculum.
            
        </p>

        
    </div>
);


export default content;