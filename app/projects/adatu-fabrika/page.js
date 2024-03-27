'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { ProjectLayout } from '@/components/ProjectLayout/ProjectLayout';
import { ProjectIntroContainer } from '@/components/ProjectIntroContainer/ProjectIntroContainer';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { ImageContainer } from '@/components/ImageContainer/ImageContainer';
import { ImageRow } from '@/components/ImageRow/ImageRow';
import { ImageAndParagraph } from '@/components/ImageAndParagraph/ImageAndParagraph';


export default function Home() {
  

  return (
    <>
        <ProjectLayout>

            <ProjectIntroContainer heading='Adatu Fabrika visual identity' src='/images/ProjectCover/adatu1.jpg'>
                This creative cluster in the center of Kuldīga is a new place for your professional growth. 
                Took responsibility of creative directing the process of identity design.
            </ProjectIntroContainer>

            <Paragraph>
                Adatu Fabrika is an innovative and international place for art, education and co-creation, a home for the international master's level study program SDSI, the Kuldīga artists' residence, prototyping workshops, digital center and the LIAA Kuldīga business incubator. It is a place where art and design, ambition and excellence meet.
            </Paragraph>

            <ImageContainer src="/images/AdatuFabrika/fabrika.jpg" contained/>

            <ImageAndParagraph src="/images/AdatuFabrika/adatuLogo.jpg">
                It brings together different industries in one place and encourages joint growth. Our goal for this visual identity was to reflect the strong architecture of Adatu Fabrika and to talk about it as a platform for growth. And to do that, we chose to use stairs as the main graphic element and colours from the architecture itself.
                <br />
                <br />
                It was very important for us to deliver this story in a simple and understandable visual language.
            </ImageAndParagraph>

            <ImageRow srcLeft={'/images/AdatuFabrika/buklets.jpg'} srcRight={'/images/AdatuFabrika/sdsi.jpg'} />

            <ImageContainer src={'/images/AdatuFabrika/mockupCover.jpg'}/>

            <ImageContainer src={'/images/AdatuFabrika/mockupView.jpg'}/>

            <Paragraph>
                My role in this project was creative directing, together in a team with:
                Laura Elīna Egle (managing director), Laura Luīze (administrator), Lotta Ausmane, Megija Saleniece, Ieva Dambīte, Alise Miļuhina, Annija Sniedze, Nikola Šmite (graphic designers)
            </Paragraph>
                
        </ProjectLayout>
    </>
  )
}

