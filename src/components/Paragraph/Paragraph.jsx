import styles from './Paragraph.module.css'

export const Paragraph = ({children, underText}) => {
    return (
        <div className={`${styles.container} ${underText ? styles.underText : ''} `}>
            <p className={styles.text}> 
                {children}
            </p>
        </div>
    )
}