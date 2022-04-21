import {NavLink} from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar(){
    return(
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                Mini <span>Blog</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink className={({isActive})=> (isActive ? styles.active : "")} to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                <NavLink className={({isActive})=> (isActive ? styles.active : "")} to="/sobre">
                        About
                </NavLink>
                </li>
            </ul>
        </nav>
    )
}