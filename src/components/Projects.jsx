import React from 'react';
import styles from './Projects.module.css';
import ProjectsCatalog from './ProjectsCatalog';

const Projects = () => {
    return (
        <section className={styles.projects}>
            <h1>Projects</h1>
            <ProjectsCatalog  />
        </section>
    );
};

export default Projects;
