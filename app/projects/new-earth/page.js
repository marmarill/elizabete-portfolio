'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { ProjectLayout } from '@/components/ProjectLayout/ProjectLayout';
import { ProjectIntroContainer } from '@/components/ProjectIntroContainer/ProjectIntroContainer';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { ImageContainer } from '@/components/ImageContainer/ImageContainer';
import { ImageRow } from '@/components/ImageRow/ImageRow';
import { ImageAndParagraph } from '@/components/ImageAndParagraph/ImageAndParagraph';
import { ImageRowThree } from '@/components/ImageRowThree/ImageRowThree';


export default function Home() {
  

  return (
    <>
        <ProjectLayout>

            <ProjectIntroContainer heading='New Earth' src='/images/ProjectCover/newEarth.jpg'>
                Some experiments made for New Earth natural supplement packaging.
            </ProjectIntroContainer>

            <Paragraph>
                New Earth focuses on natural sources for improving everyday performance and well-being. Their product range consists of five different mushroom extracts.
            </Paragraph>

            <ImageRow srcLeft={'/images/newEarth/mockup1.jpg'} srcRight={'/images/newEarth/mockup2.jpg'}/>

            <ImageContainer src={'/images/newEarth/variations.jpg'}/>

            <Paragraph>
                Inspired by the Earth’s natural textures and raw forms of mushrooms, meanwhile maintaining a sense of mental clarity by keeping designs clear and monochrome.
            </Paragraph>

            <ImageRow srcLeft={'/images/newEarth/newEarth.gif'} srcRight={'/images/newEarth/1.jpg'}/>

            <ImageRow srcLeft={'/images/newEarth/2.jpg'} srcRight={'/images/newEarth/3.jpg'}/>

                
        </ProjectLayout>
    </>
  )
}

