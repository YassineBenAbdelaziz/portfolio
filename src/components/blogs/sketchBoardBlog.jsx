import styles from '../Blog.module.css';

const content = (
    <div>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <hr className={styles.divider} />
        <p className={styles.sectionParagraph}>
            A tool that allows users to draw sketches. 
            <br />
            This project is part of <a className={styles.links} href="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer" >The Odin Project</a> curriculum.
            
        </p>

        
    </div>
);


export default content;