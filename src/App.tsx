// import React from 'react';
import './styles.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./components/Root/Root";
import HomePage from './components/HomePage/HomePage';
import ComponentesPage from './components/ComponentesPage/ComponentesPage';
import ApiPage from './components/ApiPage/ApiPage';
import ContactPage from './components/ContactPage/ContactPage';

import Labo3RandomTaylor from './components/Labo3-RandomTaylor';
import Labo4KleurenSelectie from './components/Labo4-KleurenSelectie';
import Labo4Slots from './components/Labo4-Slots';
import Labo4ShoppingList from './components/Labo4-ShoppingList';
import Labo4CounterList from './components/Labo4-CounterList';
import Labo4Filtering from './components/Labo4-filtering';
import Labo5Interval from './components/Labo5-interval';
import Labo5Pokemon from './components/Labo5-pokemon';
import Labo5LocalStorage from './components/Labo5-LocalStorage';
import Labo6ToDo from './components/Labo6-ToDo'; 
import Lab6Quizapp from './components/Labo6-QuizApp'; 
import PokemonListPage from './components/Labo7-Pokemon/PokemonListPage';
import PokemonDetailsPage from './components/Labo7-Pokemon/components/PokemonDetailsPage';

import Weather from './components/API-Weather'
import Bitcoin from './components/API-Bitcoin'
import GameOfThrones from './components/API-GOT'

import { IThemeContext, Pokemon, PokemonRoot } from './types';
import DataContext from './DataContext';
import React, { useState, useEffect, useContext } from "react";
import ThemeContext from "./ThemeContext"
import getThemeStyle from "./getThemeStyle";

const  getIdFromUrl = (url: string) => parseInt(url.replace("https://pokeapi.co/api/v2/pokemon/","").substring(-1));
const App = () => {
  const[pokemon, setPokemon] = useState<Pokemon[]>([]);
  const loadPokemon = async() => {
    let response = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=251");
    let pokemonRoot : PokemonRoot = await response.json();
    setPokemon(pokemonRoot.results.map(pokemon => {
      return {... pokemon, id: getIdFromUrl(pokemon.url!)};
    }));
    }

    useEffect(() => {
      loadPokemon();
    },[]);
  


    


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "",
          element: <HomePage/>
        },
        {
          path: "componenten",
          element: <ComponentesPage/>
        },
        {
          path: "api",
          element: <ApiPage/>
        },
        {
          path: "contact",
          element: <ContactPage/>
        },
        {
          path: "labo3randomtaylor",
          element: <Labo3RandomTaylor/>
        },
        {
          path: "labo4kleurenselectie",
          element: <Labo4KleurenSelectie/>
        },
        {
          path: "labo4slots",
          element: <Labo4Slots/>
        },
        {
          path: "labo4Filtering",
          element: <Labo4Filtering/>
        },
        {
          path: "labo4CounterList",
          element: <Labo4CounterList/>
        },
        {
          path: "labo4ShoppingList",
          element: <Labo4ShoppingList/>
        },
        {
          path: "labo5Interval",
          element: <Labo5Interval/>
        },
        {
          path: "labo5Pokemon",
          element: <Labo5Pokemon/>
        },
        {
          path: "labo5LocalStorage",
          element: <Labo5LocalStorage />
        },
        {
          path: "labo6QuizApp",
          element: <Lab6Quizapp/>
        },
        {
          path: "labo6ToDo",
          element: <Labo6ToDo/>
        },
        {
          path: "labo7pokemon",
          // element: <PokemonListPage pokemon={pokemon}/>
          element: <PokemonListPage/>
        },
        {
          path: "labo7pokemon/:id",
          element: <PokemonDetailsPage/>
        },
        {
          path: "WeatherAPI",
          element: <Weather/>
        },
        {
          path: "BitcoinAPI",
          element: <Bitcoin/>
        },
        {
          path: "GameOfThronesAPI",
          element: <GameOfThrones/>
        },
      ]
    }
  ]);
  const [theme, setTheme] = useState("dark");
  return (
    <>
    <div style={{backgroundColor: theme === "dark" ? "#2F2E30" : "#FFFAFC",
                 color: theme === "dark" ? "#FFFAFC" : "#2F2E30",
                 }}>
        <ThemeContext.Provider value={{theme: theme}}>
            <button style={{position: "absolute", left: "80%", top: "1.5%", height: "30px", color: "#2F2E30", background: "none", border: "none"}}
        onClick={()=>{ setTheme(theme => theme == "dark" ? "light" : "dark")}}>{theme == "dark" ? <p>Set to light</p> : <p>Set to dark</p>}</button>
        </ThemeContext.Provider>
        <DataContext.Provider value={{pokemon: pokemon}}>
            <RouterProvider router={router}/>
        </DataContext.Provider>
      </div>
    </>
  );
}

export default App;

//npm start
//npm i react-router-dom