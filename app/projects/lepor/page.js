'use client'
import React, { useState } from 'react';
import { ProjectLayout } from '@/components/ProjectLayout/ProjectLayout';
import { ProjectIntroContainer } from '@/components/ProjectIntroContainer/ProjectIntroContainer';
import { ImageContainer } from '@/components/ImageContainer/ImageContainer';
import { ImageRowVertical } from '@/components/ImageRowVertical/ImageRowVertical';




export default function Home() {
  

  return (
    <>
        <ProjectLayout>

            <ProjectIntroContainer heading='Lepor visual identity' src='/images/ProjectCover/lepor1.jpg'>
                Aroma marketing company that hand-crafts personalized scents for brands using natural ingredients only.
            </ProjectIntroContainer>

            <ImageRowVertical srcLeft={'/images/Lepor/bottle.jpg'} srcRight={'/images/Lepor/banner.jpg'} />

            <ImageContainer src='/images/Lepor/lepor1.jpg'/>

            <ImageContainer src='/images/Lepor/lepor2.png'/>

            {/* image row three */}

            <ImageContainer src='/images/Lepor/lepor3.jpg'/>

            <ImageContainer src='/images/Lepor/billboard.jpg' contained/>

            <ImageContainer src='/images/Lepor/mockup.jpg' contained/>
                
        </ProjectLayout>
    </>
  )
}





