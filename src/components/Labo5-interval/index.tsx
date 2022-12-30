import { useEffect,useState } from "react";
import Timer from "./components/Timer";
import CurrentTime from "./components/CurrentTime";
import RandomValue from "./components/RandomValue";
import styles from "./interval.module.css";

export interface TimerProps {
  interval: number
}

export interface RandomValueProps {
  min: number;
  max: number;
}

const RandomValue200 = ({interval} : TimerProps) => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    let handle = setInterval(() => {
       setNumber(number => Math.floor(Math.random() * 101) + 100);
    },interval);
    return () => {
      clearInterval(handle);
    }
  },[interval]);
  return <p>Random value between 100 and 200: {number}</p>
}

const App = () => {
    const [timerInterval, setTimerInterval] = useState(1000);
    return (
      <>
        <div className={styles.App}>
          <Timer interval={timerInterval} />
          <CurrentTime/>
          <RandomValue min = {1} max = {100}/>
          <RandomValue min = {100} max = {200}/>
        </div>
      </>
    );
}

// npm start
export default App;

