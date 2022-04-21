import styles from './Footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <h3>Escreva sobre o que você tem interesse!</h3>
            <p>Mini blog &copy; 2022</p>
        </footer>
    )
}