import { useState, useEffect } from 'react';

export default function TimeOut() {
    const [timer, setTimer] = useState(0);

    // function setMyTimer() {
    //     setTimer(timer + 1);
    // }

    useEffect(() => {
        setTimeout(() => {
            setTimer(timer + 1)
        }, 1000);
        console.log(timer);
        if (timer === 60){
            console.log("1 minute");
        }
    },[])  //without any dependency this is working properly
        // () => {
        // console.log(timer);
        // setTimeout(() => {
        //     setTimer(3);
        // }, 3000);
        
        // console.log(timer);
    
    
  return (
    <div>{timer}</div>
  )
}
