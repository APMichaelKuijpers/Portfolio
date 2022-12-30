import { useEffect,useState } from "react";
import { RandomValueProps} from "./../index";

const GetRandomValue = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min)
  }
  
const RandomValue = ({min, max}: RandomValueProps) => {
    const [number, setNumber] = useState(0);
    useEffect(() => {
      let handle = setInterval(() => {
         setNumber(GetRandomValue(min, max));
      },2000);
      return () => {
        clearInterval(handle);
      }
    },[min, max]);
    return <p>Random value between {min} and {max}: {number}</p>
  }

  
export default RandomValue;