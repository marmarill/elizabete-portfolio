import styles from './CV.module.css';
import Image from 'next/image'

export const CV = () => {

    return <>
        <div style={{ margin: 'auto', paddingTop: '40px' }} className={styles.mobile}>
            <Image 
                src={'/images/cv-mobile.jpg'} 
                alt="project image"
                layout="responsive"
                width={700}
                height={1000}
            />
        </div>
        <div style={{ margin: 'auto', padding: '38px', margin: '5px 82px 0' }} className={styles.desktop}>
            <Image 
                src={'/images/cv-frame.jpg'}
                alt="project image"
                layout="responsive"
                width={2}
                height={1182}
            />
        </div>
    </>
}