import React from 'react'
import {useParams} from 'react-router-dom'

function Home() {
let {id} = useParams()

  return (
    <div>Homepage

<h1>Welkom username {id} </h1>



    </div>
  )
}

export default Home