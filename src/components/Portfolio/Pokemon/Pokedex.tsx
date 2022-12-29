import { useEffect, useState } from "react"
import { ColorRing } from "react-loader-spinner"
import styles from "./Pokemon.module.css"

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
const LoadingIndicator = () => {
    return (
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
    )
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
        <main className={styles.Main}>
            <div>
                <input type="text" onChange={event => setSearch(event.target.value)} value={search} />
                
            </div>
            {loading && <LoadingIndicator />}
            <ul>
                {pokemon.filter((poke) => poke.name.toUpperCase().startsWith(search.toUpperCase())).map((poke) => {
                    return <li>{poke.name}</li>
                })}
            </ul>
            <input type="number" onChange={(event) => setLimitData(Number(event.target.value))}  />
                <button onClick={() => {
                    setActiveLimit(limitData)
                }}>Set Limit</button>
        </main>
    )
}

export default Pokedex