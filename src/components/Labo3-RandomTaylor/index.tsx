import React from "react";
import styles from "./RandomTaylor.module.css";
import {useState} from "react";

interface Coordinates {
  x: number,
  y: number
}

const RandomTaylor = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>();
  // const [x, setX] = useState(0);  // const [y, setY] = useState(0);
  const setRandom = ()=> {
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    // setX(x);    // setY(y);
    setCoordinates({x,y});
  }
  return (
    <div className={styles.App}>
      <button onClick={setRandom} >Random Image</button>
      {/* {(x !== 0 && y !== 0) && <img src="https://64.media.tumblr.com/tumblr_mas8hu5UvS1r1rjkgo1_500.gif" style={{position: "fixed", top: x, left: y}}/>} */}
      {coordinates && (<img src="https://64.media.tumblr.com/tumblr_mas8hu5UvS1r1rjkgo1_500.gif"  
        style={{position: "fixed", top: coordinates.x, left: coordinates.y}}/>)} 
    </div>
  );
}

export default RandomTaylor;
