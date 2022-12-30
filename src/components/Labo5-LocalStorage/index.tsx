import React from 'react';
import { useEffect, useState} from 'react';
import styles from "./LocalStorage.module.css";

interface Joke {
  id: string,
  joke: string,
  status: number
}

const Jokes = () => {
  const [joke, setJoke] = useState("");
  const [favoriteJoke, setFavoriteJoke] = useState(localStorage.getItem("favoriteJoke") ?? "");
  const loadJoke = async() => {
    let response = await fetch ("https://icanhazdadjoke.com/", {
      headers: {
        "Accept": "application/json"
      }
    })
    let joke: Joke = await response.json();
    setJoke(joke.joke);
  }
  useEffect(() => {
    loadJoke();
  }, []);
  const setFavorite = () => {
    setFavoriteJoke(joke);
  }
  useEffect(() => {
    localStorage.setItem("favoriteJoke", joke);
  }, [favoriteJoke])


  return(
    <>
    <div  className={styles.card} >
      <b>Randome joke:</b>
      <p>{joke}</p>
      <div>
        <button onClick={setFavorite}>Set favorite</button>
        <button onClick={loadJoke}>New Joke</button>
      </div>
    </div>
    {favoriteJoke && (
    <div className={styles.card}>
      <b>Favorite joke:</b>
      <p>{favoriteJoke}</p>
    </div>
    )}
    </>
  )
}



export default function App() {
  return (
    <div className={styles.App}>
      <Jokes/>
    </div>
  );
}

