import React from 'react';
import styles from './ProjectsCatalog.module.css';
import projects from './projects.data';
import { useNavigate } from 'react-router-dom';

const ProjectsCatalog = ({ number}) => {

    const navigate = useNavigate();

    if (number === undefined) {
        number = projects.length;
    }

    const handleViewDetails = (title, notReady) => {
        if (notReady === false) 
            navigate(`/projects/${title}`);
    }

    return (
        <div className={` ${styles.cardContainer}`}>
            {
                projects.slice(0,number).map((project) => {
                    return (
                        <div key={project.id} className={styles.card}>
                            <img className={styles.projectImage} src={project.thumbnail} alt={project.title} onClick={() => handleViewDetails(project.title.replace(' ','').toLowerCase(),project?.isNotReady)}/>
                            <div className={styles.textContainer}>
                                <h3 className={`${styles.projectName}`}>{project.title}</h3>
                                <p className={`${styles.projectDesc}`}>{project.description}</p>
                                {project?.isNotReady === true  ?  <div className={styles.comingSoon}>Coming Soon !</div> : 
                                <div className={styles.details} onClick={() => handleViewDetails(project.title.replace(' ','').toLowerCase(),project?.isNotReady)}>
                                    View Details
                                </div>
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ProjectsCatalog;
