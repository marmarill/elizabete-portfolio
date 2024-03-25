'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { ProjectLayout } from '@/components/ProjectLayout/ProjectLayout';
import { ProjectIntroContainer } from '@/components/ProjectIntroContainer/ProjectIntroContainer';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { ImageContainer } from '@/components/ImageContainer/ImageContainer';
import { ImageRow } from '@/components/ImageRow/ImageRow';
import { ImageAndParagraph } from '@/components/ImageAndParagraph/ImageAndParagraph';
import { ImageRowVertical } from '@/components/ImageRowVertical/ImageRowVertical';


export default function Home() {
  

  return (
    <>
        <ProjectLayout>

            <ProjectIntroContainer heading='Zuzeum Art Centre' src='/images/ProjectCover/zuzeum.jpg'>
                During my still ongoing journey at Zuzeum, I have worked on different event series, graphics for exhibitions’ interiors, social media announcement visual systems etc.. Here is a selection of few projects I've made together with Team Zuzeum.
            </ProjectIntroContainer>

            <ImageRow srcLeft={'/images/zuzeum/zuzeum1.jpg'} srcRight={'/images/zuzeum/zuzeum2.jpg'}/>

            <Paragraph underText>
                Zandele Art Market vol.3
            </Paragraph>

            <ImageContainer src={'/images/zuzeum/socialMedia.jpg'}/>

            <Paragraph underText>
                Visual system for announcing weekly events on social media
            </Paragraph>

            <ImageRow srcLeft={'/images/zuzeum/zuzeumMovie.jpg'} srcRight={'/images/ProjectCover/zuzeum.jpg'}/>

            <Paragraph underText>
                Zuzeum x Kino Kults Open-Air Movie Nights 2023
            </Paragraph>

            <ImageRowVertical leftOrientation={'vertical'} srcLeft={'/images/zuzeum/zuzeum_porcelans.gif'} srcRight={'/images/zuzeum/zuzeumPorcelans.jpg'} full/>

            <Paragraph underText>
                Porcelain Market at the Sculpture Garden, during ’Celebrate Porcelain with Kuznetsov’ exhibition
            </Paragraph>





        </ProjectLayout>
    </>
  )
}

