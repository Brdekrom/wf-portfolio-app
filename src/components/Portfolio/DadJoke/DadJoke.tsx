import { useEffect, useState } from "react"
import styles from "./DadJoke.module.css"
import FavJoke from "./FavJoke"
import Abbout from "../../Abbout/Abbout"

interface Joke {
    id: string,
    joke: string
    status: number
}

const DadJoke = () => {
    const [joke, setJoke] = useState("")
    const [favJoke, setFavJoke] = useState("")

    const loadJoke = async () => {
        let response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                "Accept": "application/json"
            }
        })
        let joke: Joke = await response.json()
        setJoke(joke.joke)
    }

    useEffect(() => {
        loadJoke()
    }, [])

    return (
        <>
            <div className={styles.jokeContainer}>
                <div className={styles.joke}>
                    <h1>Random joke: </h1>
                    <p>{joke}</p>
                    <button className={styles.jokeButton} onClick={e => loadJoke()}>New Joke</button>
                    <button className={styles.jokeButton} onClick={e => setFavJoke(joke)}>Set as Favorite</button>
                </div>
                {favJoke && <FavJoke joke={favJoke}/>}
                <Abbout text=""/>
            </div>
        </>
    )
}

export default DadJoke
