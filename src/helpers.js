
export const scrollToSection = (e, sectionRef) => {
    e.preventDefault();
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
}; 
