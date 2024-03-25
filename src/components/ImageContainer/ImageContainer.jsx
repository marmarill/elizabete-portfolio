import Image from "next/image"
import styles from './ImageContainer.module.css'

export const ImageContainer = ({ src, contained, left }) =>  {
      return (
        <div className={`${styles.full} ${contained ? styles.contained : ''} ${styles.left} ${left ? styles.left : styles.centre}`}>
                <Image className={styles.image}
                    src={src}
                    alt="project image"
                    layout="responsive"
                    height={contained ? "634" : '667'} 
                    width={contained ? "1002" : "1256"}
                />
        </div>
    )
}

 // {{contained ? styles.contained : styles.full} {left ? styles.left : styles.contained}} >