'use client' 
import { useEffect, useState } from 'react';
import styles from './FilterButtons.module.css'
import Button from '../Button/Button';
import { useRouter } from 'next/navigation'
import Projects from '../Projects/Projects';

const categories = [
  'UX/UI',
  'Brand identity',
  'Publication design',
  'Illustration',
  'Packaging design',
  'Typography',
  'Creative directing'
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

  return (
    <div className={styles.category}>
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