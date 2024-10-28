//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondCounter from "./component/views/SeconCounter.jsx";

//render your react application
let cont = 0;

setInterval(() => {
    const one = Math.floor(cont / 1)
    const two = Math.floor(cont / 10)
    const three = Math.floor(cont / 100)
    const four = Math.floor(cont / 10000)
    const five = Math.floor(cont / 100000)
    const six = Math.floor(cont / 1000000)

    cont++
    // console.log(cont)
    console.log(one)
    ReactDOM.createRoot(document.getElementById('app')).render(<SecondCounter
        numOne={one}
        numTwo={two}
        numThree={three}
        numFour={four}
        numFive={five}
        numSix={six}
    />);


},
    300
)
