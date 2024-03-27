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
import { ImageRowVertical } from '@/components/ImageRowVertical/ImageRowVertical';


export default function Home() {
  

  return (
    <>
        <ProjectLayout>

            <ProjectIntroContainer heading='Riga Contemporary Art Map' src='/images/ProjectCover/artMap.jpg'>
                Pocket-sized foldable guide designed to showcase the vibrant art scene of our city.
            </ProjectIntroContainer>

            <Paragraph>
                This guide features an illustrative map of Riga along with key locations of art museums, galleries, creative quarters and brief descriptions of them. The aim of this map is to provide the guests of Riga with an insight into the diverse and dynamic art scene that our city has to offer.   
            </Paragraph>

            <ImageRow compress srcLeft={'/images/artMap/artmap.gif'} srcRight={'/images/artMap/mockup.jpg'}/>

            <ImageContainer src={'/images/artMap/frame24.jpg'}/>

            <Paragraph>
                This initiative was made by Team Zuzeum in collaboration with Arterritory, Neighborhood and Riga Last Thursdays. Available for free of charge at most of the Riga’s art museums, galleries and select hotels.
            </Paragraph>

                
        </ProjectLayout>
    </>
  )
}

