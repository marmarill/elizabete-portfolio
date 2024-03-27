'use client'
import styles from './Introduction.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import React, { useRef, useEffect } from 'react';
import { useScroll } from '@/context/Scroll';

export default function Introduction() {
  
  
  // TODO: refactor this
  const trigger1Ref = useRef(null);
  const fade1Ref = useRef(null);
  const trigger2Ref = useRef(null);
  const fade2Ref = useRef(null);
  const trigger3Ref = useRef(null);
  const fade3Ref = useRef(null);

  const id = 'approach'
  const scrollRef = useRef(null);
  const { registerElement } = useScroll();

  useEffect(() => {
    registerElement(id, scrollRef.current);
  }, [id, registerElement]);

  const addFadeAnimation = (triggerRef, fadeRef) => {
    const tl = gsap.timeline({ paused: true });

    tl.to(fadeRef.current, {opacity: 1, duration: 0.01 });

    triggerRef.current.addEventListener('mouseenter', () => tl.play());
    triggerRef.current.addEventListener('mouseleave', () => {
      tl.reverse();
      tl.eventCallback('onReverseComplete', () => {
        fadeRef.current.style.opacity = 0;
      });
    });
  };


  useEffect(() => {
    addFadeAnimation(trigger1Ref, fade1Ref);
    addFadeAnimation(trigger2Ref, fade2Ref);
    addFadeAnimation(trigger3Ref, fade3Ref);
  }, [trigger1Ref, trigger2Ref, trigger3Ref]);

  return (
 <div className={styles.introductionContainer}>
    <div>
      <p className={styles.introductionText}>
        Hello! My name is{' '}
        <span className={styles.triggerText} ref={trigger1Ref}>
          Elizabete Bušēvica
        </span>
        . <br />
        I am a{' '}
        <span className={styles.triggerText} ref={trigger2Ref}>
          graphic designer
        </span>{' '}
        with a focus on <br />
        <span className={styles.triggerText} ref={trigger3Ref}>
          digital design
        </span>{' '}
        and its sustainability.
      </p>
      <Image src={'/images/introduction/book1.jpg'} ref={fade2Ref} width={426} height={305} className={`${styles.fadeInImg} ${styles.book}`} />
      <Image src={'/images/introduction/phone1.jpg'} ref={fade3Ref} width={402} height={266} className={`${styles.fadeInImg} ${styles.phone}`} />
      <Image src={'/images/introduction/bune1.jpg'} ref={fade1Ref} width={333} height={223} className={`${styles.fadeInImg} ${styles.bune}`} />
    </div>
    <div className={styles.subText} ref={scrollRef} id={id}>
    <p className={styles.subTextLeft}>
      In times when we consume large amounts of not only raw materials,
  but also information, I believe that the most compelling story can be 
  told with minimal number of elements. Therefore, I put this as my priority – to think about sustainability in the context of digital design and to resist short-term trends.
  </p>
  <p className={styles.subTextRight}>
  Through empathy and my interest in society, it’s well-being, as well as 
the rational approach that is present in my life, I have developed an interest in UX/UI design. I tend to make my solutions interactive to start conversations about socially important topics.
  </p>
  </div>
</div>
  );
}


