
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

const Projects = ({ filtersSelected }) => {
  const selectedFilters = Array.isArray(filtersSelected) ? filtersSelected : [];
  const id = 'projects'
  const ref = useRef(null);
  const { registerElement } = useScroll();

  useEffect(() => {
    registerElement(id, ref.current);
  }, [id, registerElement]);
  
  const filteredProjects = allProjects.filter((project) => {
    const projectCategories = project.categories || [];

    if (selectedFilters.length === 0) {
      // If no filters selected, include all projects
      return true;
    }
  
    return selectedFilters.some((filter) => {
      if (typeof filter === 'string') {
        // If the filter is a string, check if it's present in projectCategories
        return projectCategories.includes(filter);
      } else if (Array.isArray(filter)) {
        // If the filter is an array, check if there's an intersection with projectCategories
        return filter.some((f) => projectCategories.includes(f));
      }
      return false;
    });
  });

  const handleFilterChange = (filters) => {
    console.log('Selected Filters:', filters);
    setSelectedFilters(filters);
  };

  console.log('All Projects:', allProjects);
  console.log('Filtered Projects:', filteredProjects);

  return (
    <div>
      <div className={styles.parentContainer} ref={ref} id={id}>
      {allProjects.map((project, index) => (
          <ImageWithHover key={index} imageDetails={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;