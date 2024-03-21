'use client'
import React, { useState } from 'react';
import { ProjectLayout } from '@/components/ProjectLayout/ProjectLayout';
import { ProjectIntroContainer } from '@/components/ProjectIntroContainer/ProjectIntroContainer';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { ImageContainer } from '@/components/ImageContainer/ImageContainer';




export default function Home() {
  

  return (
    <>
        <ProjectLayout>

            <ProjectIntroContainer heading='“Pour-it-yourself ramen soup packaging' src='/images/ProjectCover/ramen.jpg'>
                Packaging and 3D visuals for urban and careless ramen for those who want to gain more confidence by keeping calm mind.
            </ProjectIntroContainer>

            <Paragraph>
                Aim for packaging’s visual design was to encourage standing up for yourself and standing out from the crowd. Therefore, inspired from bold and brave urban street art, I created outstanding and unordinary labels for pour-it-yourself ramen soup.
            </Paragraph>

            <ImageContainer src='/images/Ramen/ramenTop.png'/>

            <Paragraph>
                In this project I had to take different approach – first came target audience and only after research I had to come up with a product and concept of it’s packaging.
            </Paragraph>

            <ImageContainer src='/images/Ramen/description.png' contained/>

            <ImageContainer src='/images/Ramen/ramenFront.png' contained/>
                
        </ProjectLayout>
    </>
  )
}





