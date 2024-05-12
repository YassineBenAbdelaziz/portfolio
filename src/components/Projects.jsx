import React, { useEffect } from 'react';
import styles from './Projects.module.css';
import ProjectsCatalog from './ProjectsCatalog';

const Projects = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <section className={styles.projects}>
            <h1 className={styles.title}>Projects</h1>
            <ProjectsCatalog  />
        </section>
    );
};

export default Projects;
