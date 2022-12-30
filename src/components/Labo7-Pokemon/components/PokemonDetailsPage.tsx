import styles from "./PokemonDetailsPage.module.css";
import {useEffect, useState} from "react";
import { Pokemon } from "../../../types";
import {useParams, Link} from "react-router-dom";

const PokemonDetailsPage = () => {
    const {id} = useParams();
    const[currentPokemon, setCurrentPokemon] = useState<Pokemon>();
    const loadPokemonById = async (id: number) => {
        let response = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
        let pokemon: Pokemon = await response.json();
        setCurrentPokemon(pokemon);
    }
    useEffect(() => {
        loadPokemonById(Number(id))
    },[id]);
    return(
        <main>
            {currentPokemon!== undefined && (
                <article className={styles.PokemonDetail}>
                    <img src={currentPokemon.sprites?.front_default}/>
                    <p>Name: {currentPokemon.name}</p>
                    <p>Weight: {currentPokemon.weight}</p>
                    <p>Height: {currentPokemon.height}</p>
                    <Link to = "/labo7pokemon"> Back</Link>
                </article>
            )}
        </main>
    );
}

export default PokemonDetailsPage;