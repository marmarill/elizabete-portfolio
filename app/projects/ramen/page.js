'use client'
import React, { useState } from 'react';
import { ProjectLayout } from '@/components/ProjectLayout/ProjectLayout';
import { ProjectIntroContainer } from '@/components/ProjectIntroContainer/ProjectIntroContainer';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { ImageRow } from '@/components/ImageRow/ImageRow';




export default function Home() {
  

  return (
    <>
        <ProjectLayout>

            <ProjectIntroContainer heading='“Pour-it-yourself ramen soup packaging' src='/images/ProjectCover/ramen4.jpg'>
                Warming ramen soup as a calming ritual and self-time for those who want to gain more confidence. Because ‘confidence comes within calm mind’.
            </ProjectIntroContainer>

            <Paragraph>
                Aim for packaging’s visual design was to encourage braveness and standing out from the crowd. Therefore, inspired from bold urban street art, created outstanding labels for pour-it-yourself ramen soup.
            </Paragraph>

            <ImageRow srcLeft={'/images/Ramen/ramen1.jpg'} srcRight={'/images/Ramen/ramen2.jpg'} />

        </ProjectLayout>
    </>
  )
}





