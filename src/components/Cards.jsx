import GoogleMapReact from 'google-map-react'
import React, { useContext, useEffect, useState } from 'react'
import { Container, Card, CardGroup, Fade, Row, Col, Button } from 'react-bootstrap'

import { UserProvider } from '../context'
import Inschrijven from '../pages/Profiel'




function Cards() {
  const [state, content, loggedIn] = useContext(UserProvider)

  let tekstCard = document.getElementsByClassName("back")
  let footer = document.querySelectorAll("#cardTitle")
  let card = document.querySelectorAll("#card")
  let btnInfo = document.querySelectorAll(".btnInfo")
  function handleMouseEnter(e) {
    console.log(e.target)
    console.log(btnInfo)

  }
  // function handleMouseLeave() {
  //   btnInfo.style = "hidden"
  // }
  function handleMouseEnter(e) {
    console.log(e.target.id)
    console.log(e.currentTarget.innerHTML)

    for (let x = 0; x < content.length; x++) {
     ///// //innertext van de title nog in orde maken om dan enkel van deze card de gegevens laten zien

      //   console.log(e.target.lastChild.firstChild.innerText)
     if (content[x].title === e.currentTarget.lastChild.firstChild.innerText) {
          tekstCard[x].innerText = content[x].tekst
          footer[x].style.transform = "rotateY(180deg)"
          btnInfo[x].style.visibility = "visible"
        }else{
          tekstCard[x].innerText = ""
          footer[x].style.transform = "rotateY(0deg)"
          btnInfo[x].style.visibility = "hidden"
        }
      // } else if (e.target.id === "cardImg") {
      //   console.log(e.target.parentNode.lastChild.firstChild.innerText)
      //   if (content[x].title === e.target.parentNode.lastChild.firstChild.innerText) {
      //     tekstCard[x].innerText = content[x].tekst
      //     footer[x].style.transform = "rotateY(180deg)"
      //     btnInfo[x].style.visibility = "visible"
      //   }
      // } else if (e.target.id === "footer") {
      //   if (content[x].title === e.target.lastChild.innerText) {
      //     tekstCard[x].innerText = content[x].tekst
      //     footer[x].style.transform = "rotateY(180deg)"
      //     btnInfo[x].style.visibility = "visible"
      //   }
      // } else if (e.target.id === "overlay") {
      //   if (content[x].title === e.target.parentNode.lastChild.firstChild.innerText) {
      //     tekstCard[x].innerText = content[x].tekst
      //     footer[x].style.transform = "rotateY(180deg)"
      //     btnInfo[x].style.visibility = "visible"
      //   }
      // }
    }
  }
  function handleMouseLeave(e) {
    for (let x = 0; x < content.length; x++) {
      footer[x].style.transform = "rotateY(0deg)"
      tekstCard[x].innerText = ""
      btnInfo[x].style.visibility = "hidden"
    }
  }
  //console.log(flipped)
  // bij flip nog aanpassen dat dan de tekst goed getoond wordt en de naam blijft staan
  // knop om aan te melden voor de reis => login vereist
  // meer info




  return (
    <Container fluid  >

      <Row md={1} lg={2} xl={3} xs={1} >
        {
          content.map((data, index) => {
            return (
              <Col className=' h-25 mt-4' key={index} >

                <Card id="card" className=" text-white mx-auto mt-3  h-50 rounded-right "
                 >
                  <Container id="cardInner"   onMouseOver={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)}     >

                    <Card.Img id="cardImg" src={data.foto} alt={data.title} />

                    <Card.Text className='back'>
                      {data.text}
                       {/* <Container className='bg-dark h-25' id="footer"> */}
                        <Card.Title id="cardTitle" className='mt-5 fs-3 text-white'>{data.title}</Card.Title>
                   {/* </Container>  */}
                    </Card.Text>

                    {
                      loggedIn ?

                        <Button className='m-3 p-2 btnInfo' href={`/reizen/${data.title}`}  >  INFO </Button> :
                        <Button className='m-3  btnInfo' href={"/login"} onClick={() => { alert("log in of creëer een account om meer info over deze trip te bekijken") }}  >   INFO   </Button>

                    }







                  </Container>
                </Card>



              </Col>

            )
          })
        }

      </Row>


      {/* <GoogleMapReact
                apiKey={'AIzaSyCSNku3Qktl2r14l-fdckWe2j55KmnKqDs'}
                defaultCenter={location.center}
                defaultZoom={location.zoom}
            >
                <AnyReactComponent
                    lat={50.8597991}
                    lng={4.3369251}
                    text="Denmark"
                />
            </GoogleMapReact> */}

    </Container>
  )
}

export default Cards