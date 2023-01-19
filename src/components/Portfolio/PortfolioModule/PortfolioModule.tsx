import { NavLink } from "react-router-dom"
import styles from "./PortfolioModule.module.css"

interface PortfolioModuleProps {
    title:string,
    text:string,
    navLinkTo:string
}

const PortfolioModule = (props:PortfolioModuleProps) => {

    return (
        <>
        <section className={`${styles.bouncy} ${styles.portfolioModule}`}>
                <div>
                    <header>
                        <h1>{props.title}</h1>
                    </header>
                    <body>
                        <p>{props.text}</p>
                            <NavLink to={props.navLinkTo}> <button>Check it out!</button> </NavLink>
                    </body>
                </div>
            </section>
</>

    )
    
    
}



export default PortfolioModule