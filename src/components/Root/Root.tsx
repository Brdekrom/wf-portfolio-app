import { Outlet, NavLink } from "react-router-dom"
import styles from "./Root.module.css"


const Root = () => {
    return (
        <>
        <header>
            <nav className={styles.topNavigation}>
                <ul>
                    <li><NavLink className={({isActive}) => isActive ? styles.active : styles.notactive} to="/">Home</NavLink> </li>
                    <li><NavLink className={({isActive}) => isActive ? styles.active : styles.notactive} to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? styles.active : styles.notactive} to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
        <Outlet/>
        <footer className={styles.footer}>
        <p>&copy; 2022 Brayan de Krom, All rights reserved</p>
        
        </footer>
        </>
    )
}

export default Root