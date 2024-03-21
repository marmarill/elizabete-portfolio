import Image from "next/image"

export const ImageContainer = ({ src, contained }) =>  {
    const containedStyle = { maxWidth:'1002px', maxHeight:'634px', display:'block', margin:'20px auto',}
    const fullStyle = {marginTop:'20px'}

    return <>
        <div style={contained ? containedStyle : fullStyle}>
                <Image 
                    src={src}
                    alt="project image"
                    layout="responsive"
                    height={contained ? "634" : '667'} 
                    width={contained ? "1002" : "1256"}
                />
            </div>
    </>
}