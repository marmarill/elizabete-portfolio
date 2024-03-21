import Image from "next/image";

export const ImageRowThree = ({srcLeft, srcMiddle, srcRight}) => {
    return (
        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', marginTop:'50px', maxWidth:'735px', maxHeight:'328px'}}>
            <div style={{marginRight:'10px', flexGrow: '1.2'}}>
                <Image
                    src={srcLeft}
                    alt="project image"
                    layout="responsive"
                    width={285}  
                    height={328} 
                    sizes="(max-width: 285px) 100vw, 285px"
                    
                />
            </div>
            <div style={{marginLeft: '10px', marginRight:'10px', flexGrow: '1'}}>
                <Image
                    src={srcMiddle}
                    alt="project image"
                    layout="responsive"
                    width={188}  
                    height={328} 
                    sizes="(max-width: 188px) 100vw, 188px"
                />
            </div>
            <div style={{marginLeft: '10px', flexGrow: '1.15'}}>
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