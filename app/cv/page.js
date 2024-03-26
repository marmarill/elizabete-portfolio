'use client'
import Image from 'next/image'
import Header from '@/components/Header/Header'
import Introduction from '@/components/Introduction/Introduction'
import Footer from '@/components/Footer/Footer'
import React, { useState } from 'react';
import { ImageContainer } from '@/components/ImageContainer/ImageContainer';

export default function Home() {
  
  const [selectedFilter, setSelectedFilter] = useState(null);

  return (
    <>
      <Header />
        <main>
          <Image style={{margin: 'auto', padding:'38px'}}
              src={'/images/cv-frame.jpg'}
              alt="project image"
              layout="responsive"
              width={1256}  
              height={1182} 
          />
          <Footer />
        </main>
    </>
  )
}

