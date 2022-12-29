import { NavLink } from "react-router-dom"
import styles from "./Portfolio.module.css"
import ShoppingList from "./ShoppingList/SoppingList"
import HomeButton from "../Home/HomeButton"
const Portfolio = () => {
    return (
        <><main className={styles.portfolioMain}>
            <section className={styles.bouncy4}>
                <div>
                    <header>
                    <h1>ShoppingList</h1>
                    </header>
                    <body>
                        <p>Here you will be able to check a little shopping list created with React, typescript and no further non-react libraries</p>
                    </body>
                    <button>
                            <NavLink to="/portfolio/shoppinglist">Check it out!</NavLink>
                        </button>
                </div>
            </section>

            <section className={styles.bouncy3}>
                <div>Hello world
                    <header>
                        <button>
                            <NavLink to="/">Or this one?</NavLink>
                        </button>
                    </header>
                </div>
            </section>

            <section className={styles.bouncy2}>
                <div>Hello world
                    <header>
                        <button>
                            <NavLink to="/">Try this one!</NavLink>
                        </button>
                    </header>
                </div>
            </section>

            <section className={styles.bouncy1}>
                <div>Hello world
                    <header>
                        <button>
                            <NavLink to="/">Or this one?</NavLink>
                        </button>
                    </header>
                </div>
            </section>

            <section className={styles.bouncy1}>
                <div>Hello world<header><button>
                    <NavLink to="/">Look to this one!</NavLink>
                </button>
                </header>
                </div>
            </section>

            <section className={styles.bouncy2}>
                <div>Hello world
                    <header>
                        <button>
                            <NavLink to="/">How about this one?</NavLink>
                        </button>
                    </header>
                </div>
            </section>
            
            <section className={styles.bouncy3}>
                <div>
                    Hello world
                    <header>
                        <button>
                            <NavLink to="/">Check this one out!!</NavLink>
                        </button>
                    </header>
                </div>
            </section>
            
            <section className={styles.bouncy4}>
                <div>Hello world
                    <header>
                        <button>
                            <NavLink to="/">Maybe this one then?</NavLink>
                        </button>
                    </header>
                </div>
            </section>
            <section className={styles.reactPortfolioMessage}>
                <h2>Do You approve what you see?</h2>
                <p>Please feel free to contact me with the button here below: </p>
                <HomeButton linkTo={"/contact"} text={"Contact"}></HomeButton>
            </section>



        </main>
        </>

    )
}

export default Portfolio