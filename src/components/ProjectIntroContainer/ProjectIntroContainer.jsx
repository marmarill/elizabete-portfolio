import Image from 'next/image';
import style from './ProjectIntroContainer.module.css'

export const ProjectIntroContainer = ({heading, children, src}) => {
    return (
        <div className={style.container}>
            <div style={{maxWidth:'491px', display:'flex', flexDirection:'column'}}>
                <h1 style={{fontSize: '36px' , marginBottom: '98px', textAlign: 'left'}}>
                    {heading}
                </h1>
                <p style={{fontSize: '24px', textAlign: 'left'}}> 
                    {children}
                </p>
            </div>

            <div style={{ maxWidth:'746px', maxHeight:'577', minWidth:'390px', minHeight:'301px', display:'flex', flexGrow:'1'}}>
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