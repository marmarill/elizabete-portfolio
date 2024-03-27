'use client'
import Image from 'next/image'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Set isMobile to true if window width is less than or equal to 767px
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize on initial load
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect only runs once on mount

  return (
    <>
      <Header />
      <main>
        {isMobile ? (
          <Image style={{ margin: 'auto', padding: '38px' }}
            src={'/images/cv-mobile.jpg'} // Replace 'mobile-image.jpg' with the path to your mobile image
            alt="project image"
            layout="responsive"
            width={700}
            height={1000}
          />
        ) : (
          <Image style={{ margin: 'auto', padding: '38px' }}
            src={'/images/cv-frame.jpg'}
            alt="project image"
            layout="responsive"
            width={1256}
            height={1182}
          />
        )}
        <Footer />
      </main>
    </>
  )
}
