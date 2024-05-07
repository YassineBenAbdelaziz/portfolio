import React from 'react';
import styles from './ProjectsOverview.module.css';
import ProjectsCatalog from './ProjectsCatalog';

const ProjectsOverview = () => {



    return (
        <section id="projects">
            <div className="projectsHeader">

                <h2 className={styles.title}>
                    Projects
                </h2>
                <p className={styles.subtitle}>
                    Some of the projects I'm currently working on :
                </p>
            </div>

            <ProjectsCatalog number={4} />

            <a href="/projects" className={styles.more}>
                More Projects
                <span className={styles.arrow}> → </span>
            </a>
            
        </section>
    );
};

export default ProjectsOverview;
