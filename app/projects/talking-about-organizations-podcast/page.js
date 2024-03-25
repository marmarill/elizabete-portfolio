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

            <ProjectIntroContainer heading='TAOP visual identity' src='/images/TAOP/TAOP.gif'>
                Talking About Organizations Podcast is a monthly conversational podcast about management and organization studies.
            </ProjectIntroContainer>

            <Paragraph>
                TAOP blends emergent conversation with academic rigor into dynamic episodes that cover key works and themes in organization studies. Organizational theory studies individuals behaviour and how they participate within organizations and shape them.
            </Paragraph>

            <ImageContainer src={'/images/TAOP/taopTop.jpg'} />

            <ImageRowThree srcLeft={'/images/TAOP/cover1.jpg'} srcMiddle={'/images/TAOP/cover2.jpg'} srcRight={'/images/TAOP/cover3.jpg'} />

            <Paragraph>
                Spotify album covers
            </Paragraph>

            <ImageContainer src={'/images/TAOP/research.jpg'}/>

            <Paragraph>
                Visual research on such topics as: behaviour / interactions / performance / action / dynamics / social relationships / a form / environment
            </Paragraph>

            <ImageContainer src={'/images/TAOP/bottom1.jpg'} contained left/>

            <ImageContainer src={'/images/TAOP/bottom2.jpg'} contained left/>

                
        </ProjectLayout>
    </>
  )
}

