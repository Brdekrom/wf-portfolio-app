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
                        <button>
                            <NavLink to="/portfolio/shoppinglist">Check it out!</NavLink>
                        </button>
                    </body>

                </div>
            </section>

            <section className={styles.bouncy3}>
                <div>
                    <header>
                        <h1>Filtering</h1>
                    </header>
                    <body>
                        <p>Small filter and sort demonstration. Warning: Caps sensitive.</p>
                        <button>
                            <NavLink to="/portfolio/filtering">Or this one?</NavLink>
                        </button>
                    </body>
                </div>
            </section>

            <section className={styles.bouncy2}>
                <div>
                    <header>
                        <h1>Interval</h1>
                    </header>
                    <body>
                        <p>Showing a timer, current time and random values.</p>
                        <button>
                            <NavLink to="/portfolio/interval">Or this one?</NavLink>
                        </button>
                    </body>
                </div>
            </section>

            <section className={styles.bouncy1}>
                <div>
                    <header>
                        <h1>Pokedex</h1>
                    </header>
                    <body>
                        <p>Pokemon app using API calls from https://pokeapi.co/</p>
                        <button>
                            <NavLink to="/portfolio/pokedex">Or this one?</NavLink>
                        </button>
                    </body>
                </div>
            </section>

            <section className={styles.bouncy1}>
                <div>
                    <header>
                        <h1>DadJoke</h1>
                    </header>
                    <body>
                        <p>DadJokes with a favorite joke setter using API calls from https://icanhazdadjoke.com/</p>
                        <button>
                            <NavLink to="/portfolio/dadjoke">Or this one?</NavLink>
                        </button>
                    </body>
                </div>
            </section>

            <section className={styles.bouncy2}>
            <div>
                    <header>
                        <h1>Todo's</h1>
                    </header>
                    <body>
                        <p>small todo's list with checkboxes</p>
                        <button>
                            <NavLink to="/portfolio/todo">Or this one?</NavLink>
                        </button>
                    </body>
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
                            <NavLink to="/">Or maybe this one then?</NavLink>
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