import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import flensburg from "../images/avondFlensburg.JPG"




function Home() {
  let { id } = useParams()
//  const [flipped, setFlipped] = useState(true)
   var card = document.querySelector('#card');
  function flip() {
   // setFlipped(!flipped)


  }
 


  return (
    <div>Homepage

      <h1>Welkom username {id} </h1>
      <div className='container-fluid'>
        <div className="row" >

  <div className="col-sm-3 h-25"   id='card' onClick={flip}>
              <img className='img-fluid rounded' src={flensburg} alt='avond in Flensburg'  />
             
              

              <h3 >
                Flensburg by night
              </h3> </div>

           




        </div>
      </div>


    </div>
  )
}

export default Home