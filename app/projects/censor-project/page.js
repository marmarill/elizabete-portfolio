'use client'
import React, { useState } from 'react';
import { ProjectLayout } from '@/components/ProjectLayout/ProjectLayout';
import { ProjectIntroContainer } from '@/components/ProjectIntroContainer/ProjectIntroContainer';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { ImageContainer } from '@/components/ImageContainer/ImageContainer';
import { ImageAndParagraph } from '@/components/ImageAndParagraph/imageAndParagraph';
import { ImageRow } from '@/components/ImageRow/ImageRow';



export default function Home() {
  

  return (
    <>
        <ProjectLayout>

            <ProjectIntroContainer heading='“We removed this title because it doesn’t follow our community guidelines”' src='/images/ProjectCover/censor.jpg'>
                Research on censorship – what's the purpose and outcome of it?
            </ProjectIntroContainer>

            <Paragraph>
                A few days after the opening of Annemarija Gulbe’s exhibition at “ISSP Gallery” in July 2020, they received complaints that owners of the premises considers the works containing naked people “pornographic” and “unsuitable for children”...
                <br/>
                <br/>
                Referring to the censorship of Michelangelo’s works in the 16th century in the Sistine Chapel, where naked bodies were painted with draperies, the artist decided to cover the photographs. This event led me to question the purpose and outcome of censorship, not only in art but generally.
            </Paragraph>

            <ImageRow srcLeft={'/images/Censor/censor_mockup4.png'} srcRight={'/images/Censor/censor_mockup2.png'} />

            <Paragraph>
                I summarized my research in a publication, in which blank spaces were used as the main graphic element – to show the emptiness that censorship leaves behind itself, often in very absurd places and situations.
            </Paragraph>

            <ImageRow srcLeft={'/images/Censor/censor_mockup1.png'} srcRight={'/images/Censor/censor_mockup3.png'} />

            <ImageContainer src='/images/Censor/censor_mockup_cover.png'/>
                
        </ProjectLayout>
    </>
  )
}





