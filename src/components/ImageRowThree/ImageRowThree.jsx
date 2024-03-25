import Image from "next/image";
import styles from './ImageRowThree.module.css'

export const ImageRowThree = ({srcLeft, srcMiddle, srcRight, leftOrientation, rightOrientation, middleOrientation, compress}) => {
    const leftClassNames = `${styles.firstImage} ${leftOrientation === 'vertical' ? styles.verticalImage : styles.horizontalImage}`;
    const middleClassNames = `${styles.middleImage} ${middleOrientation === 'vertical' ? styles.verticalImage : styles.horizontalImage}`;
    const rightClassNames = `${styles.secondImage} ${rightOrientation === 'vertical' ? styles.verticalImage : styles.horizontalImage}`;
    
    return (
        <div className={`${styles.container} ${compress ? styles.compress : ''} `}>
            <div className={styles.leftClassNames}>
                <Image
                    src={srcLeft}
                    alt="project image"
                    layout="responsive"
                    width={285}  
                    height={328} 
                    sizes="(max-width: 285px) 100vw, 285px"
                    
                />
            </div>
            <div className={styles.middleClassNames}>
                <Image
                    src={srcMiddle}
                    alt="project image"
                    layout="responsive"
                    width={188}  
                    height={328} 
                    sizes="(max-width: 188px) 100vw, 188px"
                />
            </div>
            <div className={styles.rightClassNames}>
                <Image
                    src={srcRight}
                    alt="project image"
                    layout="responsive"
                    width={242}  
                    height={328} 
                    sizes="(max-width: 242px) 100vw, 242px"
                />
            </div>
        </div>
    )
}