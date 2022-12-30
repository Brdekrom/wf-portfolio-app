import { useEffect, useState } from "react"
import { ColorRing } from "react-loader-spinner"
import styles from "./Pokemon.module.css"
import LoadingIndicator from "../../LoadingIndicator/LoadingIndicator"
import Abbout from "../../Abbout/Abbout"

interface Pokedex {
    results: Pokemon[]
}

interface Pokemon {
    name: string,
    url: string
}

interface PokedexProps {
    limit?: number
}

const Pokedex = ({ limit }: PokedexProps) => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    const [limitData, setLimitData] = useState(15)
    const [activeLimit, setActiveLimit] = useState(15)


    const loadPokemon = async (limit: number) => {
        setLoading(true)
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
        let pokedex: Pokedex = await response.json()

        setPokemon(pokedex.results)
        setLoading(false)
    }

    useEffect(() => {
        loadPokemon(activeLimit)

    }, [activeLimit])

    if (loading) {
        return <LoadingIndicator />
    }
    return (
        <main className={styles.pokeMain}>
            <div>
                <input type="text" onChange={event => setSearch(event.target.value)} value={search} placeholder="Search" />
            </div>
            {loading && <LoadingIndicator />}
            <ul>
                {pokemon.filter((poke) => poke.name.toUpperCase().startsWith(search.toUpperCase())).map((poke) => {
                    return <li>{poke.name}</li>
                })}
            </ul>
            <input type="number" placeholder={(String(activeLimit))} onChange={(event) => setLimitData(Number(event.target.value))}  />
                <button onClick={() => {
                    setActiveLimit(limitData)
                }}>Set Limit</button>
            <Abbout text=""></Abbout>
        </main>
    )
}

export default Pokedex