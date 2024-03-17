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
  
  const [selectedFilter, setSelectedFilter] = useState(null);

  return (
    <>
      <Header />
      <main>
        <Introduction />
        <FilterButtons setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter}/>
        <Projects selectedFilter={selectedFilter} />
        <Footer />
        
      </main>
    </>
  )
}

