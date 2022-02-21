
import { useState, useEffect, useRef } from 'react';


const Counter = ({ name }) => {
  const [color, setColor] = useState('white');
 // super(props);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(55);

  const [timerStarted, setTimerStated] = useState(false);
  const [timerStopped, setTimerStopped] = useState(true);

  const handleTimerStart = () => {
    //e.prevState();
    if(timerStopped){
      setInterval(() => {
        setTimerStated(true);
        setTimerStopped(false);
        if(timerStarted){
          if( (seconds) >= 60){
            setMinutes((minutes) => minutes + 1);
            setMinutes({minutes}+1);
           setSeconds(0);
          }
          if(minutes >= 60){
            setHours((prevState) => prevState +1);
            setMinutes(0);
            setSeconds(0);
          }
          setSeconds((seconds) => seconds+1);
          setMinutes((minutes) => minutes + 1);
        }
      }, 1000);
          
    }
  }
  const handleTimerStart1 = () => {
    //e.prevState();
      setInterval(() => {
          if( seconds === 60 ){
            //s//tMinutes((minutes) => minutes + 1);
            setMinutes(minutes+1);
           setSeconds(0);
          }
          else{
            setSeconds(seconds - 1);

          }

          /*if(minutes === 60){
            setHours(hours +1);
            setMinutes(0);
            setSeconds(0);
          }*/
         
          //setMinutes((minutes) => minutes + 1);
        
      }, 1000);
          
    
  }
  //
  /* useEffect(() => {
     window.document.title = `Count is currently ${count}`;
   }, [count])*/

  return (
    <div className='counter'>
      <h3 className='title'>
        counter:
        <span style={{ color: color }}>{name}</span>
      </h3>
      <span id='value'>{hours} : {minutes}: {seconds} </span>
      <div className='button-container'>
        <button></button>
        <button onClick={handleTimerStart1()}>Start Timer</button>

      </div>
    </div>
  );
}
export default Counter;