
import React, { useState } from 'react';
import styles from './Projects.module.css';
import FilterButtons from '../FilterButtons/FilterButtons';

export const image1Details = {
  src: '/images/ProjectCover/censor.jpg',
  title: '“We removed this title because it doesn’t follow our community guidelines”',
  additionalText: `Research on censorship – what's the purpose and outcome of it?`,
  buttonText: 'view project',
  categories: ['Publication design', 'Typography']
};

export const image2Details = {
  src: '/images/ProjectCover/ramen.jpg',
  title: 'Pour-it-yourself ramen soup packaging',
  additionalText: 'Packaging and 3D visuals for urban and careless ramen for those who want to gain more confidence by keeping calm mind.',
  buttonText: 'view project',
  categories: ['Packaging design', 'Typography']
};

export const image3Details = {
  src: '/images/ProjectCover/camino.jpg',
  title: 'Camino Latvija mobile app',
  additionalText: 'Concept and design of an app for pilgrim voluntary organization Camino Latvija. Plan your route, accommodations and meet other like-minded people.',
  buttonText: 'view project',
  categories: ['UX/UI']
};

export const image4Details = {
  src: '/images/ProjectCover/lepor.jpg',
  title: 'Lepor visual identity',
  additionalText: 'Aroma marketing company that hand-crafts personalized scents for brands using natural ingredients only.',
  buttonText: 'view project',
  categories: ['Brand identity', 'Typography', 'Illustration']
};

export const image5Details = {
  src: '/images/ProjectCover/adatuFabrika.jpg',
  title: 'Adatu Fabrika visual identity',
  additionalText: 'This creative cluster in the center of Kuldiga is a new place for your professional growth. Took responsibility of creative directing the process of identity design.',
  buttonText: 'view project',
  categories: ['Brand identity', 'Creative directing']
};

const ImageWithHover = ({ imageDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { src, title, additionalText, buttonText } = imageDetails;

  return (
    <div
      className={styles.projectContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={src} title={title} className={styles.image} />
      {isHovered && (
        <div className={styles.hoverContent}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subText}>{additionalText}</p>
          <button className={styles.viewProjectButton}>{buttonText}</button>
        </div>
      )}
    </div>
  );
};

const Projects = ({ filtersSelected }) => {
  const selectedFilters = Array.isArray(filtersSelected) ? filtersSelected : [];
  const allProjects = [{
    src: '/images/ProjectCover/censor.jpg',
    title: '“We removed this title because it doesn’t follow our community guidelines”',
    additionalText: `Research on censorship – what's the purpose and outcome of it?`,
    buttonText: 'view project',
    categories: ['Publication design', 'Typography']
  }, image2Details, image3Details, image4Details, image5Details];
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
      <div className={styles.parentContainer}>
      {allProjects.map((project, index) => (
          <ImageWithHover key={index} imageDetails={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;