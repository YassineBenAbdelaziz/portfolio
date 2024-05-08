import styles from '../Blog.module.css';

const content = (
    <div>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <hr className={styles.divider} />
        <p className={styles.sectionParagraph}>
            This website serves as a comprehensive platform for CPC Enicarthage members to enhance their problem-solving skills and prepare for the upcoming competitions.
        </p>

        <h2 className={styles.sectionTitle}>Features</h2>
        <hr className={styles.divider} />
        <p className={styles.sectionParagraph}>
            <ul>
                <li>Problems categorized by difficulty level and topic.</li>
                <li>Scoring system with a leaderboard to encourage engagement. </li>
                <li>Users can submit their solutions and view the solutions of other users.</li>
                <li>Online Code Editor</li>
                
            </ul>
        </p>
        <h2 className={styles.sectionTitle}>Technologies</h2>
        <hr className={styles.divider} />
        <p className={styles.sectionParagraph}>

            <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Postgres SQL</li>
                <li>Redis ( for in memory session database management )</li>
                <li>Judge0 API </li>
            </ul>
        </p>
    </div>
);


export default content;