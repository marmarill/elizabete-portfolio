'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { ProjectLayout } from '@/components/ProjectLayout/ProjectLayout';
import { ProjectIntroContainer } from '@/components/ProjectIntroContainer/ProjectIntroContainer';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { ImageContainer } from '@/components/ImageContainer/ImageContainer';
import { ImageAndParagraph } from '@/components/ImageAndParagraph/imageAndParagraph';
import { ImageRow } from '@/components/ImageRow/ImageRow';



export default function Home() {
  

  return (
    <>
        <ProjectLayout>

            <ProjectIntroContainer heading='Adatu Fabrika visual identity' src='/images/ProjectCover/adatuFabrika.jpg'>
                This creative cluster in the center of Kuldīga is a new place for your professional growth. 
                Took responsibility of creative directing the process of identity design.
            </ProjectIntroContainer>

            <Paragraph>
                Adatu Fabrika is an innovative and international place for art, education and co-creation, a home for the international master's level study program SDSI, the Kuldīga artists' residence, prototyping workshops, digital center and the LIAA Kuldīga business incubator. It is a place where art and design, ambition and excellence meet.
            </Paragraph>

            <ImageContainer src="/images/AdatuFabrika/fabrika.png" contained/>

            <ImageAndParagraph src="/images/AdatuFabrika/adatuLogo.png">
                It brings together different industries in one place and encourages joint growth. Our goal for this visual identity was to reflect the strong architecture of Adatu Fabrika and to talk about it as a platform for growth. And to do that, we chose to use stairs as the main graphic element and colours from the architecture itself.
                <br />
                <br />
                It was very important for us to deliver this story in a simple and understandable visual language.
            </ImageAndParagraph>

            <ImageRow srcLeft={'/images/AdatuFabrika/buklets.png'} srcRight={'/images/AdatuFabrika/sdsi.png'} />

            <ImageContainer src={'/images/AdatuFabrika/mockupCover.png'}/>

            <ImageContainer src={'/images/AdatuFabrika/mockupView.png'}/>
                
        </ProjectLayout>
    </>
  )
}

