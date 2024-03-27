import Image from "next/image"
import styles from './gif.module.css'

export const GIF = ({ src, contained, left }) =>  {
      return (
        <div className={styles.container}>
                <Image className={styles.gif}
                    src={src}
                    alt="project image"
                    layout="responsive"
                    height="600"
                    width="338"
                />
        </div>
    )
}

 // {{contained ? styles.contained : styles.full} {left ? styles.left : styles.contained}} >