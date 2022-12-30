import styles from "./ComponentesPage.module.css";
import DataContext from "../../DataContext"
import { Link } from "react-router-dom";
import React, { useState } from "react";
import {useContext} from "react";


const ComponentesPage = () => {
    interface Componentes{
        name: string;
        link: string;
        description: string;
      }
    const componentes: Componentes[] = [
        {name: "Random Taylor", link: "/labo3randomtaylor", description: "Click the button and get a gif of Taylor Swift at a random location."},
        {name: "Color selection", link: "/labo4kleurenselectie", description: "Select one or more colors, and a block with these colors will appear."},
        {name: "Filtering and Sorting", link: "/labo4Filtering", description: "Filters and sorts a list of names and ages."},
        {name: "Shopping list", link: "/labo4ShoppingList", description: "A program to create a shopping list. You can add and remove groceries, and put down how many you want."},
        {name: "Slot machine", link: "/labo4slots", description: "A slot machine that you can play with, each game costs 1 virtual euro."},
        {name: "Counter List", link: "/labo4CounterList", description: "Make different counters, they can be positive and negative. Also adds up how much it all added up."},
        {name: "Interval", link: "/labo5Interval", description: "A clock, a timer and it shows a random number every second"},
        {name: "Local Storage", link: "/labo5LocalStorage", description: "Get a random joke, if you really like it, you can save it as a favorite."},
        {name: "Pokemon V1", link: "/Labo5Pokemon", description: "A simple list of all pokemons, where you can choose how many you can see."},
        {name: "Quiz App", link: "/labo6QuizApp", description: "Play a quiz here, it can be as long as you want, you will immediately see if you got the question right."},
        {name: "To Do", link: "/labo6ToDo", description: "Keep a list of everything you need to do and what you have done."},
        {name: "Pokemon V2", link: "/labo7pokemon", description: "A simple pokedex, find your favorite pokemon and see some info about it."},
      ]
    const [searchComponentes, setSearchComponentes] = useState("");

    return(
        <main className={styles.ListComponents}>
                <label>
                    <input type="text" className={styles.ConpomentSearch} value={searchComponentes} onChange={(event) => setSearchComponentes(event.target.value)}/>
                </label>
            <div className={styles.container}>
                    {
                          componentes.filter(component => component.name.toLowerCase().startsWith(searchComponentes.toLowerCase())).map(component => (
                                <div className={styles.box}>
                                    <Link to = {component.link} className={styles.listItem}>
                                    <div className={styles.content}>
                                        <div className={styles.text}>
                                            <h2>{component.name}</h2>
                                            <hr></hr>
                                            <p>{component.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div> 
                        ))
                    }       
            </div >
        </main>
    );
}

export default ComponentesPage;