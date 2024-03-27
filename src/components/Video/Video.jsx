import React from 'react';
import styles from './Video.module.css'

const Video = ({src}) => {
  return (
    <div className={styles.container}>
      <video className={styles.video} controls>
        <source src={src}/>
      </video>
    </div>
  );
};

export default Video;