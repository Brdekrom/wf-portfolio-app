import styles from "./Home.module.css"

const Home = () => {
    let birthdate: Date = new Date("1997-08-12")
    let timeDiff: number = Math.abs(Date.now() - birthdate.getTime());
    let age: number = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    
    return (
        <>
        <main>
            <header className={styles.header}>
                <h1>Brayan de Krom's portfolio</h1>
            </header>
            <section className={styles.Intro}>
                <p>Hi there! <br/> My name is Brayan (Brian) de Krom, I am {age} years old, I've started studying in 2021 to become a programmer at <a title="AP Hogeschool Antwerpen is een pluralistische Vlaamse hogeschool in Antwerpen" href="https://www.ap.be/">AP hogeschool</a> in antwerp, besides my now partime job as customer service executive and Junior .Net developer I'm also an official  <span title="Royal Belgian Football Assosiation">Jouth RBFA referee</span></p>
            </section>
        </main>
        </>
    )
}

export default Home