import { useState } from "react"
import ShowTime from "./ShowTime";

export default function App(){
 
  const [time, setTime] = useState({ms:0, s:0,m:0,h:0});
  const [interval, setInterv] = useState(0)
  const [status,setStatus] = useState(0)
   var start =()=>{
   run();
   setStatus(1)
   setInterv(setInterval(run,10));
  }

  var stop =()=>{
    clearInterval(interval);
   setStatus(2);
   }

   var reset=() =>{
    clearInterval(interval);
    setStatus(0);
    setTime({ms:0,s:0,m:0,h:0})
   }

  var resume =() =>
  {
    start()
  }
  var updateMs = time.ms ,
  updateS = time.s,
  updateM = time.m,
  updateH = time.h;
  const run =() => {
    if (updateM === 60){
      updateH++;
      updateM = 0;
    }
    if (updateS === 60){
      updateM++;
      updateS = 0;
    }
    if(updateMs === 100){
      updateS++;
      updateMs = 0;
    }
    updateMs++;
    return setTime({ms:updateMs,s:updateS, m:updateM,h:updateH})
  }
  
 
  return <>
  
 <ShowTime status={status} start={start} stop={stop} resume={resume} reset={reset} time={time}/>
  
  </>
} 