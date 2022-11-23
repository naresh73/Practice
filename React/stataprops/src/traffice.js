import './traffic.css';
import { useState } from 'react';

export default function TrafficLight() {

    const [red, setRed] = useState("");
    const [yellow, setYellow] = useState("");
    const [green, setGreen] = useState(""); 

    function lightRed() {
        setRed("red")
        setYellow("")
        setGreen("")
    }

    function lightYellow() {
        setRed("")
        setYellow("yellow")
        setGreen("")
    }

    function lightGreen() {
        setRed("")
        setYellow("")
        setGreen("green")
    }


  return (
    <div className="traffic-light">
        <div className="light">
            <button onClick={lightRed} className={red}
            >
            </button>
        </div>
        <div className="light">
        <button onClick={lightYellow} className={yellow}
            >
            </button>
        </div>
        <div className="light">
        <button onClick={lightGreen} className={green}>
            </button>
        </div>
    </div>
  )
}
