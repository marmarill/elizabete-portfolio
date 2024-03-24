import Image from "next/image";

export const ImageRow = ({srcLeft, srcRight}) => {
    return (
        <div className="container">
            <div className="firstImage">
                <Image
                    src={srcLeft}
                    alt="project image"
                    layout="responsive"
                    width={618}  
                    height={410} 
                    sizes="(max-width: 746px) 100vw, 746px"
                    
                />
            </div>
            <div className="secondImage">
                <Image
                    src={srcRight}
                    alt="project image"
                    layout="responsive"
                    width={618}  
                    height={410} 
                    sizes="(max-width: 746px) 100vw, 746px"
                />
            </div>
        </div>
    )
}