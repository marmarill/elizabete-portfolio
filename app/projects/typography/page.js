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

            <ProjectIntroContainer heading='Typography on wooden blocks' src='/images/ProjectCover/typography.jpg'>
                Is it a painting??
            </ProjectIntroContainer>

            <Paragraph>
                During my studies at AAL I had to make a series of paintings. But I'm a designer so I painted letters:)
            </Paragraph>

            <ImageContainer src={'/images/typographyBlocks/1.jpg'} />
    
        </ProjectLayout>
    </>
  )
}

