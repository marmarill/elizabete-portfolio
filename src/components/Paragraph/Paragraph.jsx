import styles from './Paragraph.module.css'

export const Paragraph = ({children}) => {
    return (
        <div className={styles.container}>
            <p className={styles.text}> 
                {children}
            </p>
        </div>
    )
}