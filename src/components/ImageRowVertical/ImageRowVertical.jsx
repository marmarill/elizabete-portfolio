import styles from './ImageRowVertical.module.css'
import Image from "next/image";


export const ImageRowVertical = ({srcLeft, srcRight, leftOrientation, rightOrientation, full}) => {
    const leftClassNames = `${styles.firstImage} ${leftOrientation === 'vertical' ? styles.verticalImage : styles.horizontalImage}`;
    const rightClassNames = `${styles.secondImage} ${rightOrientation === 'vertical' ? styles.verticalImage : styles.horizontalImage}`;
    
    return (
        <div className={`${styles.container} ${full ? styles.full : ''} `}>
            <div className={leftClassNames}>
                <Image
                    src={srcLeft}
                    alt="project image"
                    layout="fill"
                    objectFit="cover"
                    
                />
            </div>
            <div className={rightClassNames}>
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