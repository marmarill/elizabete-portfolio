import Image from "next/image";
import styles from './ImageRowThree.module.css'

export const ImageRowThree = ({srcLeft, srcMiddle, srcRight}) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftImage}>
                <Image
                    src={srcLeft}
                    alt="project image"
                    layout="responsive"
                    width={285}  
                    height={328} 
                    sizes="(max-width: 285px) 100vw, 285px"
                    
                />
            </div>
            <div className={styles.middleImage}>
                <Image
                    src={srcMiddle}
                    alt="project image"
                    layout="responsive"
                    width={188}  
                    height={328} 
                    sizes="(max-width: 188px) 100vw, 188px"
                />
            </div>
            <div className={styles.rightImage}>
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