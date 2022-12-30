import React from "react";
import styles from "./CounterList.module.css";
import {useState} from "react";

const Counter = () => {
  const [counters, setCounters] = useState<number[]>([0]);
  const addCounter = () => {
    setCounters([...counters, 0]);
  };
  const increaseCounter = (index: number) => {
    setCounters(counters.map((counter, i) => i === index ? counter +1 : counter));
  }
  const decreaseCounter = (index: number) => {
    setCounters(counters.map((counter, i) => i === index ? counter -1 : counter));
  }
  return(
    <div>
      {counters.map ((counter, index) => {
         let color = "";
         if (counter > 0) {color = "green";}
         else if (counter < 0) {color = "red";}
      return(
        <section style = {{flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
        <button onClick={() => increaseCounter(index)} >Omhoog</button>
          <div style={{}}>
            {/* <p style={{flex: 1, textAlign: "center", color: counters < 0 ? "red" : counters == 0 ? "black" : "green" }}>  Count: {counters} </p> */}
            <p style={{flex: 1, textAlign: "center", color: color, paddingLeft: 20, paddingRight: 20 }}>  Count: {counter}</p> 
          </div>
       <button onClick={() => decreaseCounter(index)}>Omlaag</button>
      </section>
      )})}
      <p>Som van de tellers {counters.reduce((prev,curr)=> prev + curr, 0)}</p>
      <button onClick={addCounter}>Voeg teller toe</button>
    </div>
  )
}

const CounterList = () => {
  
  return (
    <div className={styles.App}>
       <Counter/>
    </div>
  );
}


export default CounterList;
