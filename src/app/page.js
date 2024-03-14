'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header/Header'
import Introduction from '@/components/Introduction/Introduction'
import FilterButtons from '@/components/FilterButtons/FilterButtons'
import Projects from '@/components/Projects/Projects';
import Footer from '@/components/Footer/Footer'
import React, { useState } from 'react';


export default function Home() {
  
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  return (
    <>
      <Header />
      <main>
        <Introduction />
        <FilterButtons onFilterChange={handleFilterChange} />
        <Projects  filtersSelected={selectedFilters} />
        <Footer />
        
      </main>
    </>
  )
}

