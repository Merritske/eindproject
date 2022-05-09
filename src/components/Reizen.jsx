import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { Database } from '../context'

function Reizen({reis}) {



  return (
 <Container>

<h1>naam van de reis</h1>
<p>uitleg over de reis/planning</p>
<h3> beschikbare datums om in te schrijven</h3>

<ul>
    <li>
        deelnemer 1: extra info? leeftijd, woonplaats?
    </li>
    <li>
        deelnemer 2
    </li>
</ul>

 </Container>
  )
}

export default Reizen