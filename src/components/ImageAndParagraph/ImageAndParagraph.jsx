import Image from "next/image";


export const ImageAndParagraph = ({ children, src}) => {
    return (
        <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', marginTop:'102px'}}>
                <div style={{maxWidth:'741px', display:'flex', justifyContent:'center', flexDirection:'column'}}>
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

