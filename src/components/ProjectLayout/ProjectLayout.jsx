import Header from "../Header/Header"
import styles from "./ProjectLayout.module.css"

export const ProjectLayout = ({ children }) =>  {
    return <>
        <Header />
        <main className={styles.projectLayoutBody}>
            {children}
        </main>
    </>
}