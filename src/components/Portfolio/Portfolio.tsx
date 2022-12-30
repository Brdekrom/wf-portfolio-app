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
                        <p>Here you will be able to check a little shopping list created with React, typescript and no further non-react libraries.</p>
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
                            <NavLink to="/portfolio/filtering">Check it out!</NavLink>
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
                            <NavLink to="/portfolio/interval">Check it out!</NavLink>
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
                        <p>Pokemon app using API calls from https://pokeapi.co/.</p>
                        <button>
                            <NavLink to="/portfolio/pokedex">Check it out!</NavLink>
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
                        <p>DadJokes with a favorite joke setter using API calls from https://icanhazdadjoke.com/.</p>
                        <button>
                            <NavLink to="/portfolio/dadjoke">Check it out!</NavLink>
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
                        <p>Small todo's list with checkboxes.</p>
                        <button>
                            <NavLink to="/portfolio/todo">Check it out!</NavLink>
                        </button>
                    </body>
                </div>
            </section>

            <section className={styles.bouncy3}>
                <div>
                    <header>
                        <h1>QuizApp</h1>
                    </header>
                    <body>
                        <p>Small QuizApp with 10 questions.</p>
                        <button>
                            <NavLink to="/portfolio/quizapp">Check it out!</NavLink>
                        </button>
                    </body>
                </div>
            </section>

            <section className={styles.bouncy4}>
                <div>
                    <header>
                        <h1>To be finished</h1>
                    </header>
                    <body>
                        <p>N/A</p>
                        <button>
                            <NavLink to="/portfolio">Check it out!</NavLink>
                        </button>
                    </body>
                </div>
            </section>
            <section className={styles.reactPortfolioMessage}>

                <p>Please feel free to contact Me on the button here below: </p>
                <HomeButton linkTo={"/contact"} text={"Contact"}></HomeButton>
            </section>



        </main>
        </>

    )
}

export default Portfolio