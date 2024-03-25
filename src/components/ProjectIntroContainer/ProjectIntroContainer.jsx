import Image from 'next/image';
import style from './ProjectIntroContainer.module.css'

export const ProjectIntroContainer = ({heading, children, src}) => {
    return (
        <div className={style.container}>
            <div className={style.textSide}>
                <h1 className={style.header}>
                    {heading}
                </h1>
                <p className={style.subText}> 
                    {children}
                </p>
            </div>

            <div className={style.imageContainer}>
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