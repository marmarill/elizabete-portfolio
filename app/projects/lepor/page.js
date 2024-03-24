'use client'
import React, { useState } from 'react';
import { ProjectLayout } from '@/components/ProjectLayout/ProjectLayout';
import { ProjectIntroContainer } from '@/components/ProjectIntroContainer/ProjectIntroContainer';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { ImageContainer } from '@/components/ImageContainer/ImageContainer';
import { ImageRow } from '@/components/ImageRow/ImageRow'
import { ImageRowThree } from '@/components/ImageRowThree/ImageRowThree';




export default function Home() {
  

  return (
    <>
        <ProjectLayout>

            <ProjectIntroContainer heading='Lepor visual identity' src='/images/ProjectCover/lepor.jpg'>
                Aroma marketing company that hand-crafts personalized scents for brands using natural ingredients only.
            </ProjectIntroContainer>

            <ImageRow srcLeft={'/images/Lepor/bottle.png'} srcRight={'/images/Lepor/banner.png'} />

            <ImageContainer src='/images/Lepor/lepor1.png'/>

            <ImageContainer src='/images/Lepor/lepor2.png'/>

            <ImageRowThree srcLeft={'/images/Lepor/left.png'} srcMiddle={'/images/Lepor/middle.png'} srcRight={'/images/Lepor/right.png'} />

            <ImageContainer src='/images/Lepor/lepor3.png'/>

            <ImageContainer src='/images/Lepor/billboard.png' contained/>

            <ImageContainer src='/images/Lepor/mockup.png' contained/>
                
        </ProjectLayout>
    </>
  )
}





