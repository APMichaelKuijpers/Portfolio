import React from 'react';
import logo from './logo.svg';
import { useState } from "react";
import styles from "./slots.module.css";

interface SlotProps {
  value: number
}

interface SlotMachineProps{
  slots: number
}

let slotImages = [
  require("./assets/symbool1.png"),
  require("./assets/symbool2.png"),
  require("./assets/symbool3.png"),
  require("./assets/symbool4.png"),
  require("./assets/symbool5.png")
]

const NumberOfSlots = 5;

const getRandomSLots = (numberofSlots: number) => {
  let slots: number[] = [];
  for (let i = 0; i < numberofSlots; i++) {
    slots.push(Math.floor(Math.random() *5))
  }
  return slots;
}

const Slots = ({value}: SlotProps) => {
  return <img src = {slotImages[value]} alt = "slot"  className={styles.slot} />
}


const Slotmachine = ({slots: amountOfSlots}: SlotMachineProps) => {
  const[slots, setSlots] = useState<number[]>(getRandomSLots(amountOfSlots));
  const[money, setMoney] = useState<number>(100);
 
  const isWinning = (slots: number[]) =>{
    let winning : boolean = slots.every((slot) => slot == slots[0]);
    return winning;
  }
  const pullLever = () =>{
    let randomSlots: number[] = getRandomSLots(amountOfSlots);
    setSlots(randomSlots);
    if(isWinning(randomSlots)){
      setMoney(money => money + 20)
    } else{
      setMoney(money => money - 1)
    }
  }
  return (
    <div>
      {/* {winning ?<h1 className={styles.won} > Je hebt gewonnen </h1>: <h1 className={styles.lost} > Je hebt verloren </h1>} */}
      {money > 0 && <h4 className={styles.text}> Saldo: €{money}</h4>}
      {money == 0 && <h4 className={styles.text}> Je bent bankroet</h4>}
      <div className={styles.center}>
        <button onClick = {pullLever} 
        disabled = {money > 0 ? false : true}>
          Pull lever</button>
        {slots.map((slot, index) => (
          <Slots  value={slot} key={index} />
         ))}
      </div>
    </div>
  )
}

const App = () => {
  return (
      <div className={styles.App}>
        <Slotmachine slots = {3}/>
      </div>
  );
}
export default App;

//npm start