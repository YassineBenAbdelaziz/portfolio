import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import projects from './projects.data';
import styles from './ProjectDetails.module.css';
import Blog from './Blog';

const ProjectDetails = () => {
    const { title } = useParams();
    const project = projects.find(p => {
        return p.title.replace(' ', '').toLowerCase() === title;

    })
    const videoRefs = useRef({});
    const [playing, setPlaying] = useState(null);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const handleBeforeChange = (currentSlide, nextSlide) => {
        Object.values(videoRefs.current).forEach(video => {
            video.pause();
            setPlaying(null);
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
            videoRefs.current = {};
        };
    }, []);



    if (!project) {
        return <p>Error: Project not found</p>;
    }

    return (

        <section id={styles.projectDetails}>
            <h1 className={styles.title}>
                {project.title}
            </h1>
            
            <Carousel 
            beforeChange={handleBeforeChange} 
            responsive={responsive} 
            infinite={false} 
            showDots={true} >
                {project.carousel.map((media, index) => {
                    if (media.type === 'video') {
                        return (<video ref={el => videoRefs.current[index] = el} className={styles.video} key={index} src={media.media} controls onClick={() => {
                            videoRefs.current[index].play();
                            setPlaying(index);
                        }} />)
                    }
                    return (<img className={styles.image} key={index} src={media.media} alt="image" />)
                })
                }
            </Carousel>

            
            <div className={styles.buttons}>
                { project?.github && 
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <button className={`${styles.btn} ${styles.github} `} disabled={project.github === undefined ? true : false }>
                        Github
                    </button>
                </a>}
                {project?.demo && 
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <button className={`${styles.btn} ${styles.demo} `} disabled={project.demo === undefined ? true : false }>
                        Live Demo
                    </button>
                </a>}
            </div> 

            <Blog content={project.blog} />

        </section>
    );
};

export default ProjectDetails;
