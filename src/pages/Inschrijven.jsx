import React from 'react'
import {Button } from "react-bootstrap"

//mag weg???

function Inschrijven() {

    function handleClick(){
        console.log("Going on a trip?")
    }
  return (
    <div>
     <h1>Inschrijven</h1>   
Inschrijvingsformulier
<Button className='m-3' onClick={handleClick}>Inschrijven</Button>
    </div>
  )
}

export default Inschrijven