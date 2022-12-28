import { Outlet } from "react-router-dom"
import styles from "./Root.module.css"


const Root = () => {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Portfolio</li>
                </ul>
            </nav>
        </header>
        <Outlet/>
        </>
    )
}

export default Root