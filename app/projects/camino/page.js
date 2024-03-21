'use client'
import React, { useState } from 'react';
import { ProjectLayout } from '@/components/ProjectLayout/ProjectLayout';
import { ProjectIntroContainer } from '@/components/ProjectIntroContainer/ProjectIntroContainer';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { ImageContainer } from '@/components/ImageContainer/ImageContainer';
import { ImageAndParagraph } from '@/components/ImageAndParagraph/imageAndParagraph';
import { ImageRow } from '@/components/ImageRow/ImageRow';
import { ImageRowThree } from '@/components/ImageRowThree/ImageRowThree';



export default function Home() {
  

  return (
    <>
        <ProjectLayout>

            <ProjectIntroContainer heading='Camino Latvija mobile app' src='/images/ProjectCover/camino.jpg'>
                Concept and design of an app for pilgrim voluntary organization Camino Latvija. 
                Plan your route, accommodations and 
                meet other like-minded people.
            </ProjectIntroContainer>

            <Paragraph>
                Camino Latvija is a voluntary organization, which develops the route of the popular Camino de Santiago pilgrimage in Latvia, so that travelers can reach their destination – Santiago city in Spain.
            </Paragraph>

            <Paragraph> 
                Currently users can view the route on the Camino Latvija website. However, when on the go, the mobile format is definitely more convenient. Therefore, in collaboration with the organization itself, I developed a prototype for mobile app. Adding features such as: route planning and navigation, accommodation reservation, sights to see, option of communication with other like-minded travelers, weather etc..
            </Paragraph>

            <ImageContainer src='/images/Camino/mobileMockup.png'/>
            
            <div style={{display:'flex' }}>
                <ImageRowThree srcLeft={'/images/Camino/imageLeft.png'} srcMiddle={'/images/Camino/imageMiddle.png'} srcRight={'/images/Camino/imageRight.png'}/>

                <p style={{display:'flex', maxWidth:'442px'}}> 
                    Visual design was inspired by the route's homemade signs and the signature colors of the Camino Santiago
                </p>
            </div>

            <ImageContainer src={'/images/Camino/mood.png'}/>

            <ImageContainer src={'/images/Camino/moodMockup.png'}/>
                
        </ProjectLayout>
    </>
  )
}

