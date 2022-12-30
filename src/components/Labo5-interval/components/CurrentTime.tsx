import { useEffect,useState } from "react";


const CurrentTime = () => {
  var [date,setDate] = useState(new Date());
  useEffect(() => {
      var timer = setInterval(()=>
        setDate(new Date()), 1000 );
      return function cleanup() {
          clearInterval(timer)
      }
  });
  return(
      <div>
          <p>Current time: <span style={{fontWeight: "bold"}}> {date.toLocaleTimeString()}</span></p>
      </div>
  )
}

export default CurrentTime;