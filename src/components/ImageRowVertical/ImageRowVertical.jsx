import styles from './ImageRowVertical.module.css'
import Image from "next/image";
import { isGif } from '@/helpers';

export const ImageRowVertical = ({srcLeft, srcRight, leftOrientation, rightOrientation, full}) => {
    const leftClassNames = `${styles.firstImage} ${leftOrientation === 'vertical' ? styles.verticalImage : styles.horizontalImage}`;
    const rightClassNames = `${styles.secondImage} ${rightOrientation === 'vertical' ? styles.verticalImage : styles.horizontalImage}`;
    
    return (
        <div className={`${styles.container} ${full ? styles.full : ''} `}>
            <div className={leftClassNames}>
                <Image
                    src={srcLeft}
                    alt="project image"
                    layout="responsive"
                    objectFit="cover"
                    width="588"
                    height="809"
                    unoptimized={isGif(srcLeft)}
                />
            </div>
            <div className={rightClassNames}>
                <Image
                    src={srcRight}
                    alt="project image"
                    layout="fill" 
                    objectFit="cover"
                    unoptimized={isGif(srcRight)}
                />
            </div>
        </div>
    );
}