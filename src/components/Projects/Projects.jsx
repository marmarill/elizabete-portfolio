
import React, { useState, useRef, useEffect } from 'react';
import styles from './Projects.module.css';
import FilterButtons from '../FilterButtons/FilterButtons';
import Link from 'next/link';
import Button from '../Button/Button';
import { useScroll } from '@/context/Scroll';
import {allProjects} from './allProjects'

const ImageWithHover = ({ imageDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { src, title, additionalText, buttonText, path} = imageDetails;

  return (
    <div
      className={styles.projectContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={src} title={title} className={styles.image} />

        <div className={styles.hoverContent} style={ isHovered ? {
          opacity: 1
        } : {}}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subText}>{additionalText}</p>
          
          <Link href={`/projects/${path}`} style={{marginTop: 'auto'}}>
            <Button size={'small'}>{buttonText}</Button>
          </Link>
        </div>
    </div>
  );
};

const Projects = ({ selectedFilter }) => {
  const id = 'projects'
  const ref = useRef(null);
  const { registerElement } = useScroll();

  useEffect(() => {
    registerElement(id, ref.current);
  }, [id, registerElement]);
  
  const filteredProjects = selectedFilter ? allProjects.filter((project) => {
    if (project.categories.includes(selectedFilter)) {
      return project
    }
  }) : allProjects

  return (
    <div>
      <div className={styles.parentContainer} ref={ref} id={id}>
      {filteredProjects.map((project, index) => (
          <ImageWithHover key={index} imageDetails={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;