import styles from "./ApiPage.module.css";
import DataContext from "../../DataContext"
import { Link } from "react-router-dom";
import React, { useState } from "react";
import {useContext} from "react";


const ApiPage = () => {
    interface Componentes{
        name: string;
        link: string;
        description: string;
      }
    const componentes: Componentes[] = [
        {name: "Weather", link: "/WeatherAPI", description: "Enter a city and see what kind of Weather it has."},
        {name: "Bitcoin", link: "/BitcoinAPI", description: "See how much Bitcoin is worth in multiple kinds of values"},
        {name: "Game of Thrones", link: "/GameOfThronesAPI", description: "A list of Game of Thrones characters, made in Javascript instead of Typescript, see the file why"},
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

export default ApiPage;