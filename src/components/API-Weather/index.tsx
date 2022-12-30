import React from "react";
import styles from "./Weather.module.css";
import {useState, useEffect} from "react";
import { WeatherRoot } from "../../types";

const api = {
  key: "b2d719151bb806e4bda35732531b8543",
  base: "https://api.openweathermap.org/data/2.5/"
}




const Weather= () => {
  const [search, setSearch] = useState("");

  const [weatherName, setweatherName] = useState("");
  const [weatherTemp, setweatherTemp] = useState(0);
  const [weatherType, setweatherType] = useState("");
  const [weatherDescription, setweatherDescription] = useState("");

  const searchPressed = async() => {
    let response = await fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    let weathercity: WeatherRoot  = await response.json();
    setweatherName(weathercity.name)
    setweatherTemp(weathercity.main.temp)
    setweatherType(weathercity.weather[0].main)
    setweatherDescription(weathercity.weather[0].description)
    };
  useEffect(() => {
    searchPressed();
  }, []);

  
  return (
    <div className={styles.App}>
      <h1 className={styles.textpadding} >Weather API</h1>
      <div className={styles.textpadding} >
        <input
          className={styles.CitySearch}
          type = "text"
          placeholder="Enter city/town..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchPressed}>Search</button>
      </div>
      {typeof weatherName !== "undefined" ?
        <div >
          <p className={styles.textpadding} >{weatherName}</p>
          <p className={styles.textpadding} >{weatherTemp}°C</p>
          <p className={styles.textpadding} >{weatherType}</p>
          <p className={styles.textpadding} >{weatherDescription}</p>
        </div>
        :
        <p></p>
      } 
    </div>
  );
}

export default Weather;


