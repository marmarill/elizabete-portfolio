import Image from "next/image";
import styles from './FiveImages.module.css'


export const FiveImages = ({srcOne, srcTwo, srcThree, srcFour, srcFive}) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image
                    src={srcOne}
                    alt="project image"
                    layout="responsive"
                    width={285}  
                    height={328} 
                    sizes="(max-width: 285px) 100vw, 285px"
                />
            </div>
            <div className={styles.image}>
                <Image
                    src={srcTwo}
                    alt="project image"
                    layout="responsive"
                    width={188}  
                    height={328} 
                    sizes="(max-width: 188px) 100vw, 188px"
                />
            </div>
            <div className={styles.image}>
                <Image
                    src={srcThree}
                    alt="project image"
                    layout="responsive"
                    width={242}  
                    height={328} 
                    sizes="(max-width: 242px) 100vw, 242px"
                />
            </div>
            <div className={styles.image}>
                <Image
                    src={srcFour}
                    alt="project image"
                    layout="responsive"
                    width={242}  
                    height={328} 
                    sizes="(max-width: 242px) 100vw, 242px"
                />
            </div>
            <div className={styles.image}>
                <Image
                    src={srcFive}
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