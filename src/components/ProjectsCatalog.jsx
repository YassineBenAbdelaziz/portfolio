import React from 'react';
import styles from './ProjectsCatalog.module.css';
import projects from './projects.data';
import { useNavigate } from 'react-router-dom';

const ProjectsCatalog = ({ number}) => {

    const navigate = useNavigate();

    if (number === undefined) {
        number = projects.length;
    }

    const handleViewDetails = (title) => {
        navigate(`/projects/${title}`);
    }

    return (
        <div className={` ${styles.cardContainer}`}>
            {
                projects.slice(0,number).map((project) => {
                    return (
                        <div key={project.id} className={styles.card}>
                            <img className={styles.projectImage} src={project.thumbnail} alt={project.title} />
                            <div className={styles.textContainer}>
                                <h3 className={`${styles.projectName}`}>{project.title}</h3>
                                <p className={`${styles.projectDesc}`}>{project.description}</p>
                                <div className={styles.details} onClick={() => handleViewDetails(project.title.replace(' ','').toLowerCase())}>
                                    View Details
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ProjectsCatalog;
