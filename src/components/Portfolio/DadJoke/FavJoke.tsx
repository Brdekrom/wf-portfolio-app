import { SetStateAction, useEffect, useState } from "react"
import styles from "./DadJoke.module.css"

interface FavJokeProps {
    joke: string
}


const FavJoke = ({ joke }: FavJokeProps) => {
    return (<>
        <div className={styles.joke}>
            <h1>Favorite joke: </h1>
            <p>{joke}</p>
        </div>
    </>)
}

export default FavJoke