import Image from "next/image";
import styles from './ImageAndParagraph.module.css'


export const ImageAndParagraph = ({ children, src}) => {
    return (
        <div className={styles.container}>
                <div className={styles.paragraphContainer}>
                    <p> 
                        {children}
                    </p>
                </div>
                <div className={styles.imageContainer}>
                    <Image 
                        src={src}
                        alt="project image"
                        layout="responsive"
                        width={746}  
                        height={577} 
                        sizes="(max-width: 746px) 100vw, 746px"
                    />
                </div>    
        </div>
    )
}

