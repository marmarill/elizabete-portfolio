import Header from "../Header/Header"
import styles from "./ProjectLayout.module.css"
import Footer from "../Footer/Footer"
import BackToProjectButton from "../BackToProjectsButton/BackToProjectsButton"



export const ProjectLayout = ({ children }) =>  {
    return <>
        <Header />
        <main className={styles.projectLayoutBody}>
            {children}
        </main>
        <BackToProjectButton />
        <Footer />
    </>
}