import styles from "./Home.module.css"
import { NavLink } from "react-router-dom"
import HomeButton from "./HomeButton";

const Home = () => {
    let birthdate: Date = new Date("1997-08-12")
    let timeDiff: number = Math.abs(Date.now() - birthdate.getTime());
    let age: number = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    
    return (
        <>
        <main>
            <section className={styles.intro}>
                <figure>
                    <img src="/bdk.jpg" alt="" className={styles.bdk} />
                </figure>
                <h1>Brayan de Krom's portfolio</h1>
                <p>Hi there! <br/> My name is Brayan (Brian) de Krom, I am {age} years old, I've started studying in 2021 to become a programmer at <a title="AP Hogeschool Antwerpen is een pluralistische Vlaamse hogeschool in Antwerpen" href="https://www.ap.be/">AP hogeschool</a> in antwerp, besides my now partime job as a Logistics Customer Service Executive and Junior .NET developer I'm also an official  <span title="Royal Belgian Football Assosiation">RBFA Jouth Referee.</span></p>
            </section>
            <section className={styles.buttonContainer}>
            <HomeButton linkTo="/portfolio" text="Portfolio"></HomeButton>
            <HomeButton linkTo="/contact" text="Contact"></HomeButton>
            </section>
        </main>
        </>
    )
}

export default Home