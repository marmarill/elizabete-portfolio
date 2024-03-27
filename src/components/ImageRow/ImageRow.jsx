import Image from "next/image";
import styles from './ImageRow.module.css'
import { isGif } from '@/helpers';

export const ImageRow = ({srcLeft, srcRight}) => {
    return (
        <div className={styles.container}>
            <div className={styles.firstImage}>
                <Image
                    src={srcLeft}
                    alt="project image"
                    layout="responsive"
                    width="285"
                    height="465"
                    unoptimized={isGif(srcLeft)}
                />
            </div>
            <div className={styles.secondImage}>
                <Image
                    src={srcRight}
                    alt="project image"
                    layout="responsive"
                    width="285" 
                    height="465"
                    unoptimized={isGif(srcRight)}
                    
                />
            </div>
        </div>
    );
}