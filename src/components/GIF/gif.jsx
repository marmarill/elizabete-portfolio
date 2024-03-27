import Image from "next/image"
import styles from './gif.module.css'
import { isGif } from '@/helpers';

export const GIF = ({ src, contained, left }) =>  {
      return (
        <div className={styles.container}>
                <Image className={styles.gif}
                    src={src}
                    alt="project image"
                    layout="responsive"
                    height="600"
                    width="338"
                    unoptimized={isGif(src)}
                />
        </div>
    )
}

 // {{contained ? styles.contained : styles.full} {left ? styles.left : styles.contained}} >