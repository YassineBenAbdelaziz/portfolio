import React from 'react';
import styles from './ProjectsOverview.module.css';
import ProjectsCatalog from './ProjectsCatalog';
import { Link } from 'react-router-dom';

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
            
            <Link to="/projects" className={styles.more}>
                <div className={styles.arrowContainer}>
                    View all
                    <span className={styles.arrow}> → </span>
                </div>
            </Link>
            
        </section>
    );
};

export default ProjectsOverview;
