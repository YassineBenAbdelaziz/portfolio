import React from 'react';
import styles from './Projects.module.css';
import data from './projects.data';

const Projects = () => {



    return (
        <section id={styles.projects}>
            <div className="projectsHeader">

                <h2>
                    Projects
                </h2>
                <p>
                    Some of the projects I'm currently working on :
                </p>
            </div>


            <div className={` ${styles.cardContainer}`}>
                {
                    data.map((project) => {
                        return (
                            <div key={project.id} className={styles.card}>
                                <img className={styles.projectImage} src={project.image} alt={project.title} />
                                <div className={styles.textContainer}>
                                    <h3 className={`${styles.projectName}`}>{project.title}</h3>
                                    <p className={`${styles.projectDesc}`}>{project.description}</p>
                                    <div className={styles.details}>
                                        View Details
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            <a href="">
                More
                <span className={styles.arrow}> → </span>
            </a>
            
        </section>
    );
};

export default Projects;
