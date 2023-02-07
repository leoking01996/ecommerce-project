import React, { useEffect, useState } from 'react'

const Timer = () => {
const [seconds,setSeconds]=useState(0);
const [minutes,setMinutes]=useState(0);
const [hours,setHours]=useState(0);

var timer;
useEffect(()=>{
timer= setInterval(()=>{
    setSeconds(seconds+1);

    if(seconds===59){
        setMinutes(minutes+1);
        setSeconds(0);
    }

    if(minutes===59){
        setHours(hours+1);
        setMinutes(0);
    }
},1000)

return ()=> clearInterval(timer);

});

  return (
    <div className='timer'>
      <div className='container'>
        <div className='timer_container'>
       <center>
       
        <ul>
         <li>{ hours<10? "0"+hours:hours}</li>:
         <li>{minutes<10? "0"+minutes:minutes}</li>:
         <li>{seconds<10? "0"+seconds:seconds}</li>
        </ul>
        </center>
        </div>
      </div>
    </div>
  )
}
export default Timer
