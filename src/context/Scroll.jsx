'use client'
import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export function useScroll() {
    return useContext(ScrollContext);
}

export const ScrollProvider = ({ children }) => {
    const elementRefs = useRef({});

    const registerElement = (id, ref) => {
        elementRefs.current[id] = ref;
    };

    const scrollToElement = (id) => {
        const element = elementRefs.current[id];
        if (!element) {
            return 
        }

        let distanceFromElement

        switch(id.trim()) {
            case 'approach':
                distanceFromElement = 140
                break;
            default:
                distanceFromElement = 0
                break;
        }
        
        const topPos = element.getBoundingClientRect().top + window.pageYOffset;

        console.log(topPos, distanceFromElement)
        
        window.scrollTo({
            top: topPos - distanceFromElement,
            behavior: "smooth"
        });
    };

    return (
        <ScrollContext.Provider value={{ registerElement, scrollToElement }}>
            {children}
        </ScrollContext.Provider>
    );
};