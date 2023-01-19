import { NavLink } from "react-router-dom"
import styles from "./Portfolio.module.css"
import ShoppingList from "./ShoppingList/SoppingList"
import HomeButton from "../Home/HomeButton"
import PortfolioModule from "./PortfolioModule/PortfolioModule"
const Portfolio = () => {

    return (
        <>
        <main className={styles.portfolioMain}>
           <PortfolioModule
           title="ShoppingList"
           text="Here you will be able to check a little shopping list created with React, typescript and no further non-react libraries."
           navLinkTo="/portfolio/shoppinglist"/>

           <PortfolioModule
           title="Filtering"
           text="Small filter and sort demonstration. Warning: Caps sensitive."
           navLinkTo="/portfolio/filtering"/>

           <PortfolioModule
           title="Interval"
           text="Showing a timer, current time and random values."
           navLinkTo="/portfolio/interval"/>

           <PortfolioModule
           title="Pokedex"
           text="Pokemon app using API calls from https://pokeapi.co/."
           navLinkTo="/portfolio/interval"/>

           <PortfolioModule
           title="DadJoke"
           text="DadJokes with a favorite joke setter using API calls from https://icanhazdadjoke.com/."
           navLinkTo="/portfolio/dadjoke"/>

           <PortfolioModule
           title="Todo's"
           text="Small todo's list with checkboxes."
           navLinkTo="/portfolio/todo"/>

           <PortfolioModule
           title="QuizApp"
           text="Small QuizApp with 10 questions."
           navLinkTo="/portfolio/quizapp"/>

           <PortfolioModule
           title="To be finished"
           text="N/A"
           navLinkTo="/portfolio"/>

            <section className={styles.reactPortfolioMessage}>
                <p>Please feel free to contact Me on the button here below: </p>
                <HomeButton linkTo={"/contact"} text={"Contact"}></HomeButton>
            </section>
        </main>
        </>

    )
}

export default Portfolio