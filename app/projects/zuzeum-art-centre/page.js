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
import { FiveImages } from '@/components/FiveImages/FiveImages';
import { GIF } from '@/components/GIF/gif';


export default function Home() {
  

  return (
    <>
        <ProjectLayout>

            <ProjectIntroContainer heading='Zuzeum Art Centre' src='/images/ProjectCover/zuzeum.jpg'>
                During my still ongoing journey at Zuzeum, I have worked on different event series, graphics for exhibitions’ interiors, social media announcement visual systems etc.. 
            </ProjectIntroContainer>

            <Paragraph underText>
                Here is a selection of few projects I've worked on  together with Team Zuzeum.
            </Paragraph>

            <ImageRow srcLeft={'/images/zuzeum/zuzeum1.jpg'} srcRight={'/images/zuzeum/zuzeum2.jpg'}/>

            <Paragraph underText>
                Zandele Art Market vol.3
            </Paragraph>

            <FiveImages srcOne={'/images/zuzeum/1.jpg'} srcTwo={'/images/zuzeum/2.jpg'} srcThree={'/images/zuzeum/3.jpg'} srcFour={'/images/zuzeum/4.jpg'} srcFive={'/images/zuzeum/5.jpg'}/>

            <Paragraph underText>
                Visual system for announcing weekly events on social media
            </Paragraph>

            <ImageRow srcLeft={'/images/zuzeum/zuzeumMovie.jpg'} srcRight={'/images/ProjectCover/zuzeum.jpg'}/>

            <Paragraph underText>
                Zuzeum x Kino Kults Open-Air Movie Nights 2023
            </Paragraph>

            <GIF full src={'/images/zuzeum/zuzeum_porcelans.gif'}/>


            <Paragraph underText>
                Porcelain Market at the Sculpture Garden, during ’Celebrate Porcelain with Kuznetsov’ exhibition
            </Paragraph>





        </ProjectLayout>
    </>
  )
}

