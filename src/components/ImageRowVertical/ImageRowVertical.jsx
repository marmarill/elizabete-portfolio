import styles from './ImageRowVertical.module.css'
import Image from "next/image";


export const ImageRowVertical = ({srcLeft, srcRight}) => {
    return (
        <div className={styles.container}>
            <div className={styles.firstImage}>
                <Image
                    src={srcLeft}
                    alt="project image"
                    layout="fill"
                    objectFit="cover"
                    
                />
            </div>
            <div className={styles.secondImage}>
                <Image
                    src={srcRight}
                    alt="project image"
                    layout="fill" 
                    objectFit="cover"
                />
            </div>
        </div>
    );
}