import Image from "next/image";

export const ImageRow = ({srcLeft, srcRight}) => {
    return (
        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', marginTop:'50px'}}>
            <div style={{marginRight:'10px', flexGrow: '1'}}>
                <Image
                    src={srcLeft}
                    alt="project image"
                    layout="responsive"
                    width={618}  
                    height={410} 
                    sizes="(max-width: 746px) 100vw, 746px"
                    
                />
            </div>
            <div style={{marginLeft: '10px', flexGrow: '1'}}>
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