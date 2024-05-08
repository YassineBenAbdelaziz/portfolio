import styles from '../Blog.module.css';

const content = (
    <div>
        <h2 className={styles.sectionTitle}>Overview</h2>
        <hr className={styles.divider} />
        <p className={styles.sectionParagraph}>
        A customer complaint management system application for Mesa Verde Bank, developed using the MEAN stack to facilitate the efficient handling of complaints from individual retail customers of a bank. The system aims to streamline the complaint resolution process, enhance communication between customers and bank representatives, and ultimately improve customer satisfaction.
        </p>

        
        <h2 className={styles.sectionTitle}>Technologies</h2>
        <hr className={styles.divider} />
        <p className={styles.sectionParagraph}>

            <ul>
                <li>Angular</li>
                <li>Express JS</li>
                <li>Node JS</li>
                <li>Mongo DB</li>
            </ul>
        </p>
    </div>
);


export default content;