import styles from '../Blog.module.css';

const content = (
    <div>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <hr className={styles.divider} />
        <p className={styles.sectionParagraph}>
            Retro game Donkey kong built with Java. 
        </p>

        
        <h2 className={styles.sectionTitle}>Technologies</h2>
        <hr className={styles.divider} />
        <p className={styles.sectionParagraph}>

            <ul>
                <li>Java</li>
                <li>Java FX</li>
            </ul>
        </p>
    </div>
);


export default content;