'use client' 
import { useEffect, useRef, useState } from 'react';
import styles from './FilterButtons.module.css'
import Button from '../Button/Button';
import { useRouter } from 'next/navigation'
import Projects from '../Projects/Projects';
import { useScroll } from '@/context/Scroll';

const categories = [
  'UX/UI',
  'Publication',
  'Illustration',
  'Brand identity',
  'Packaging',
  'Typography',
];

export default function FilterButtons({ setSelectedFilter, selectedFilter }) {
  
  const toggleFilter = (category) => {
    if (selectedFilter === category) {
      // If the clicked filter is already selected, deselect it
      setSelectedFilter(null);
    } else {
      // Otherwise, set the new filter
      setSelectedFilter(category);
    }
  };
  console.log('Selected Filter:', selectedFilter);

  const id = 'projects'
  const ref = useRef(null);
  const { registerElement } = useScroll();

  // TODO out the id one section above or try to stop the scrolling ?px before anchor when coming from different page

  useEffect(() => {
    registerElement(id, ref.current);
  }, [id, registerElement]);
  
  return (
    <div className={styles.category} ref={ref} id={id}>
      <div className={styles.label}>
        <p className={styles.filterText}>filter by categories</p>
      </div>
      <div className={styles.categoryButtons}>
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => toggleFilter(category)}
            enabled={selectedFilter === category}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}