import GoogleMapReact from 'google-map-react'
import React, { useContext, useEffect, useState } from 'react'
import { Container, Card, CardGroup, Fade, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FotoProvider, UserProvider } from '../context'
import Inschrijven from '../pages/Inschrijven'




function Cards() {
  const [state, content] = useContext(UserProvider)
  const [flipped, setFlipped] = useState(true)

  console.log(content)


  let tekstCard = document.getElementsByClassName("back")
  let footer = document.querySelectorAll("#cardTitle")
  console.log(footer)
  function handleMouseEnter(e) {
    setFlipped(true)
    e.preventDefault()
   
    console.log(e.target.lastChild.lastChild.firstChild.innerText)
    for (let x = 0; x < content.length; x++) {
 console.log(content[x].title)
      if (content[x].title === e.target.lastChild.lastChild.firstChild.innerText) {
      //  console.log(footer[x]) GEEFT UNDEFINED


      //  footer[x].style.transform = "rotateY(180deg)!important"
      }
    }
  }
  function handleMouseLeave(e) {
    for (let x = 0; x < content.length; x++) {
     // footer[x].style.transform = "rotateY(0deg)"

      setFlipped(false)

    }
  }
  console.log(flipped)
  //bij flip nog aanpassen dat dan de tekst goed getoond wordt en de naam blijft staan
  //knop om aan te melden voor de reis => login vereist
  //meer info




  return (
    <Container fluid  >

      <Row md={1} lg={2} xl={3} >
        {
          content.map((data, index) => {
            return (
              <Col className=' h-25' key={index} onClick={() => console.log(index)} onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} >

                <Card id="card" className="bg-dark text-white mx-auto mt-3  h-50 "    >

                  <Card.Img id="cardImg" src={data.foto} alt={data.title} />



               <Card.ImgOverlay  >

                    <Card.Text className='back'>
                      {data.tekst}
                    </Card.Text>


                  </Card.ImgOverlay>

           


                  <div className='bg-dark' id="footer">
                    <Card.Title id="cardTitle" className='mt-3 fs-2 text-white'>{data.title}</Card.Title>
{
  state.username != "" ? 
  
  <Button className='m-3' href={`/reizen/${data.title}`}>   INFO  </Button> :
  <Button className='m-3' href={"/login"} onClick={()=>{ alert("log in of creëer een account om meer info over deze trip te bekijken")}}  >   INFO  </Button> 

}
               
                   

                  

                  </div>


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





      {/* 



        <CardGroup>
<Card id="card" className="bg-dark text-white m-3" onClick={flip} >
          <Card.Img id="cardImg" src={flensburg} alt="Flensburg at night" className='h-25' />
          <Card.ImgOverlay >
            <Card.Title >Flensburg</Card.Title>
            <Card.Text id="back" >
              Flensburg is a nice harbour town in Germany. It is the last one you will see before crossing the border with Denmark.
              <br />
              You should visit and stay for at least one day.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>


   <Card id="card" className="bg-dark text-white m-3" onClick={flip} >
          <Card.Img id="cardImg" src={Burg} alt="Flensburg at night" className='h-25' />
          <Card.ImgOverlay >
            <Card.Title >Burg-Reuland</Card.Title>
            <Card.Text id="back" >
              Burg-Reuland is close to the three-country point of Belgium, Luxemburg and Germany. It's the eastern cantons. Visit the ruine in the town.
        
              Nice for biking and walking.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

   <Card id="card" className="bg-dark text-white m-3" onClick={flip} >
          <Card.Img id="cardImg" src={flensburg} alt="Flensburg at night" className='h-25' />
          <Card.ImgOverlay >
            <Card.Title >Flensburg</Card.Title>
            <Card.Text id="back" >
              Flensburg is a nice harbour town in Germany. It is the last one you will see before crossing the border with Denmark.
        
              You should visit and stay for at least one day.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

    <Card id="card" className="bg-dark text-white m-3" onClick={flip} >
        <Card.Img id="cardImg" src={flensburg} alt="Flensburg at night" className='h-25' />
        <Card.ImgOverlay >
          <Card.Title >Flensburg</Card.Title>
          <Card.Text id="back" >
            Flensburg is a nice harbour town in Germany. It is the last one you will see before crossing the border with Denmark.
            <br />
            You should visit and stay for at least one day.
          </Card.Text>
        </Card.ImgOverlay>
 </Card>
      
    </CardGroup>
 */}

      {/* <div>
        <div className="row" >

  <div className="col-sm-3 h-25 "   id='card' onClick={flip}>
            {
              flipped? <img className='img-fluid rounded' src={flensburg} alt='avond in Flensburg'  />
              : <h3 >
                Flensburg by night
              </h3>
            }  
             
              

               </div>

              <div className="col-sm-3 h-25"   id='card' onClick={flip}>
              <img className='img-fluid rounded' src={flensburg} alt='avond in Flensburg'  />
             
              

              <h3 >
                Flensburg by night
              </h3> </div>

              <div className="col-sm-3 h-25"   id='card' onClick={flip}>
              <img className='img-fluid rounded' src={flensburg} alt='avond in Flensburg'  />
             
              

              <h3 >
                Flensburg by night
              </h3> </div>

              <div className="col-sm-3 h-25"   id='card' onClick={flip}>
              <img className='img-fluid rounded' src={flensburg} alt='avond in Flensburg'  />
             
              

              <h3 >
                Flensburg by night
              </h3> </div>

              <div className="col-sm-3 h-25"   id='card' onClick={flip}>
              <img className='img-fluid rounded' src={flensburg} alt='avond in Flensburg'  />
             
              

              <h3 >
                Flensburg by night
              </h3> </div>

              <div className="col-sm-3 h-25"   id='card' onClick={flip}>
              <img className='img-fluid rounded' src={flensburg} alt='avond in Flensburg'  />
             
              

              <h3 >
                Flensburg by night
              </h3> </div>

              <div className="col-sm-3 h-25"   id='card' onClick={flip}>
              <img className='img-fluid rounded' src={flensburg} alt='avond in Flensburg'  />
             
              

              <h3 >
                Flensburg by night
              </h3> </div>

              <div className="col-sm-3 h-25"   id='card' onClick={flip}>
              <img className='img-fluid rounded' src={flensburg} alt='avond in Flensburg'  />
             
              

              <h3 >
                Flensburg by night
              </h3> </div>

              <div className="col-sm-3 h-25"   id='card' onClick={flip}>
              <img className='img-fluid rounded' src={flensburg} alt='avond in Flensburg'  />
             
              

              <h3 >
                Flensburg by night
              </h3> </div>

           




        </div>
      </div> */}
    </Container>
  )
}

export default Cards