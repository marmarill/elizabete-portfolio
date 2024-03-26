
export const scrollToSection = (e, sectionRef) => {
    e.preventDefault();
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
}; 

export const isGif = (src) => {
    return src.includes('gif') ? true : false
}