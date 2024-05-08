import styles from '../Blog.module.css';

const content = (
    <div>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <hr className={styles.divider} />
        <p className={styles.sectionParagraph}>
            An e-learning website for Enicarthage. The website allows students to view their courses, download course materials, and take quizzes.
            Students can also check their progress and rate their courses.

        </p>

        <h2 className={styles.sectionTitle}>Technologies</h2>
        <hr className={styles.divider} />
        <div className={styles.sectionParagraph}>

            <ul>
                <li>Angular</li>
                <li>Spring Boot</li>
                <li>Spring Security</li>
                <li>MySQL</li>
                <li>Junit</li>
                <li>Log4j</li>
            </ul>
        </div>
    </div>
);


export default content;