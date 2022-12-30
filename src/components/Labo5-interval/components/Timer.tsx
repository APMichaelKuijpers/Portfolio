import { useEffect,useState } from "react";
import { TimerProps } from "./../index";

const Timer = ({interval} : TimerProps) => {
    const [number, setNumber] = useState(0);
    useEffect(() => {
      let handle = setInterval(() => {
         setNumber(number => number + 1);
      },interval);
      return () => {
        clearInterval(handle);
      }
    },[interval]);
    return <p>{number}</p>
  }

export default Timer;