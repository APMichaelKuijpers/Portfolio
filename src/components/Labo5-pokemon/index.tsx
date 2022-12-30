import React from "react";
import { useEffect, useState } from "react";
import LoadingIndicator from "./components/LoadingIndicator"
import styles from "./pokemon.module.css";
// import axios from "axios";

interface PokedexProps {
    limit?: number
}
interface Pokedex {
    results: Pokemon[]
}
interface Pokemon {
    name: string,
    url: string,
}

const Pokedex = ({limit = 251} : PokedexProps) => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(false);
    const [filterText, setFilterText] = useState("");
    const loadPokemon = async(limit: number) => {
        setLoading(true);
        let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=" + limit);
        let pokedex: Pokedex = await response.json();
        setPokemon(pokedex.results);
        setLoading(false);
    }
    useEffect(() => {
       loadPokemon(limit);
    }, [limit])

    return(
        <div>
            {loading && <LoadingIndicator/>}
            <input type="text" onChange={(e) => setFilterText(e.target.value)} value={filterText}/>
            <ul>
            {
                pokemon
                    .filter((p) => p.name.toUpperCase().startsWith(filterText.toUpperCase()))
                    .map((pokemon) =>{
                        return <li>{pokemon.name}</li>
                })
            }
            </ul> 
        </div>

    )
}


const App = () => {
    const [limit, setLimit] = useState(251);
    const [activeLimit, setActiveLimit] = useState(251);
    return(
        <div className={styles.App}>
            <Pokedex limit={activeLimit}/>
            <input type="text" onChange={(e) => setLimit(Number(e.target.value))} value={limit}/>
            <button onClick={() => {
                setActiveLimit(limit);
            }}>Set Limit</button>
        </div>
    );
};

export default App;