import { dblClick } from '@testing-library/user-event/dist/click'
import React, { useState } from 'react'
import { Container, Card, CardGroup, Fade, Row, Col } from 'react-bootstrap'
import flensburg from "../images/avondFlensburg.JPG"
import Burg from "../images/Burg-Reuland.JPG"
import db from '../firebase.js'


function Cards({image, title, tekst}) {

    const [flipped, setFlipped] = useState(false)

    function flip() {
      setFlipped(!flipped)
      console.log("flipped")
  
    }
 console.log(db.collection("reizen")) 

  return (
    <div>
<Card id="card" className="bg-dark text-white m-3" onClick={flip} >
          <Card.Img id="cardImg" src={image} alt="Flensburg at night" className='h-25' />
          <Card.ImgOverlay >
            <Card.Title >{title}</Card.Title>
            <Card.Text id="back" >
      {tekst}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>






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
              <br />
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
    </div>
  )
}

export default Cards