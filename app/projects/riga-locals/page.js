'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { ProjectLayout } from '@/components/ProjectLayout/ProjectLayout';
import { ProjectIntroContainer } from '@/components/ProjectIntroContainer/ProjectIntroContainer';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { ImageContainer } from '@/components/ImageContainer/ImageContainer';
import { ImageRow } from '@/components/ImageRow/ImageRow';
import { ImageAndParagraph } from '@/components/ImageAndParagraph/ImageAndParagraph';
import Video from '@/components/Video/Video';
import { ImageRowVertical } from '@/components/ImageRowVertical/ImageRowVertical';


export default function Home() {
  

  return (
    <>
        <ProjectLayout>

            <ProjectIntroContainer heading='“Riga Locals”  – an interactive archive of experience stories from local foreigners' src='/images/ProjectCover/rigaLocals.jpg'>
                Bachelor thesis project in Graphic Design
            </ProjectIntroContainer>

            <Paragraph>
                Riga Locals is an interactive archive of stories gathered from foreigners living in Riga, Latvia. This project allows user to understand and familiarise themselves with the experiences of local foreigners through personal stories and data visualisations. The project aims to promote an inclusive and open society and encourage public discussions on integration issues.
            </Paragraph>

            <Video src={'/images/rigaLocals/rigaLocalsVideo.mp4'}/>

            <ImageRow srcLeft={'/images/rigaLocals/topLeft.jpg'} srcRight={'/images/rigaLocals/topRight.jpg'} />

            <ImageContainer src={'/images/rigaLocals/billboard.jpg'} contained/>

            <Paragraph>
                The project was exhibited in “Design Days 2023” at Art Academy of Latvia. So in addition to the digital prototype an exhibition stand with pre-recorded stories was made to create a better engagement with visitors.
            </Paragraph>

            <ImageRowVertical leftOrientation={'vertical'} srcLeft={'/images/rigaLocals/exhibition1.jpg'} srcRight={'/images/rigaLocals/exhibition2.jpg'} full/>
                
        </ProjectLayout>
    </>
  )
}

