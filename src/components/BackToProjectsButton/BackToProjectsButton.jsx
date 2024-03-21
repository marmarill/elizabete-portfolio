'use client'

import Link from 'next/link';
import styles from './BackToProjectsButton.module.css'
import { Arrow } from './Arrow';


export default function BackToProjectButton({onClick, enabled}) {
    return (
     
      <Link href={`/#projects`} scroll={true}>
        <span className={styles.backButton}>
            <Arrow />
            Back to projects
        </span>
      </Link>
    );
  }