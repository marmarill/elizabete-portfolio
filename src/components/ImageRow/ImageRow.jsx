import Image from "next/image";
import styles from './ImageRow.module.css'

export const ImageRow = ({srcLeft, srcRight}) => {
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