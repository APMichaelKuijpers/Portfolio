import styles from "./KleurenSelectie.module.css";
import React, { useState } from "react";
import {useContext} from "react";

const ColorSelect = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [shownColors, setShownColors] = useState<string[]>([])
  const onChange : React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    let selectedOptions: string[] = [];
    for(let option of Array.from(e.target.selectedOptions)){
      selectedOptions.push(option.value);
    }
    setSelectedColors(selectedOptions);
  }
  return(
    <div className={styles.selectionContainer}>
      <select  multiple value ={selectedColors} onChange={onChange}>
        <option value="Red">Red</option>
        <option value="Orange">Orange</option>
        <option value="Yellow">Yellow</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Purple">Purple</option>
        <option value="Pink">Pink</option>
      </select>
      
      <button onClick={() => {
        setShownColors([...selectedColors]);}}>
           Show Colors</button>
      <div className={styles.colorContainer}>
        {shownColors.map((color) => (
          <section style={{ height: 100, backgroundColor: color, flex: 1, width: (100 * shownColors.length)}}></section>
          ))} 
      </div>
    </div>
  )
}


const Labo4KleurenSelectie = () => {
  return (
    <div className={styles.App}>
      <ColorSelect/>
    </div>
  );
}

export default Labo4KleurenSelectie;

