import axios from 'axios'
import React, { useContext } from 'react'
import {Button } from "react-bootstrap"

//mag weg???

function Profiel() {
const [state, content, loggedIn] = useContext()
    function handleClick(){
        console.log("profiel update")
        axios.put("/profiel")
        .then(res=>res.json())
        .then((data)=>{console.log(data)})
    }
  return (
    <div>
     <h1>Profiel: {state.username}</h1>   
     <ul>
       <li>
         password: {state.password}
       </li>
       <li>
         email: {state.email}
       </li>
       <li>
         geboortedatum: {state.birthday}
       </li>
       <li>
           woonplaats: {state.woonplaats}
       </li>
       <li>
         Reizen 
         <ul>
           {
             state.reizen.gedaan.map((reis, index)=>(
<li key={index}>
  {reis.title}
  <ul>
    <li>{reis.datum}</li>
    <li>
      {reis.comment}
    </li>
  </ul>
</li>
             ))
           }
  {
    state.reizen.gepland.map((reis, index)=>{
<li key={index}>
  {reis.titel}
    {reis.datum}
  
 </li>   })
  }

         </ul>
       </li>
     
     </ul>

<Button className='m-3' onClick={handleClick}>Update profiel</Button>
    </div>
  )
}

export default Profiel