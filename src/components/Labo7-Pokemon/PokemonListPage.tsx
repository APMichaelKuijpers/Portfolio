import styles from "./PokemonListPage.module.css";
import { Pokemon } from "../../types";
import { Link } from "react-router-dom";
import {useContext, useState} from "react";
import DataContext from "../../DataContext"

interface PokemonListPageProps {
    // pokemon: Pokemon[]
}

// const PokemonListPage = ({pokemon}: PokemonListPageProps)
const PokemonListPage = () => {
    const {pokemon} = useContext(DataContext);
    const [filter, setFilter] = useState("");
    const filterPokemon = pokemon.filter(p => p.name.toUpperCase().startsWith(filter.toUpperCase()));
    return(
        <main>
            <input type = "text" className={styles.search} value={filter} onChange={e => setFilter(e.target.value)}/>
            {filterPokemon.map(pokemon => (
                <Link to = {`/labo7pokemon/${pokemon.id}`} className={styles.listItem} key={pokemon.id}>
                {pokemon.name}
                </Link>
            ))}
        </main>
    );
}

export default PokemonListPage;