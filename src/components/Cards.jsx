import { dblClick } from '@testing-library/user-event/dist/click'
import React, { useEffect, useState } from 'react'
import { Container, Card, CardGroup, Fade, Row, Col } from 'react-bootstrap'

import { db} from '../firebase'
import { collection, doc, getDocs } from "firebase/firestore"


function Cards({image, title, tekst}) {

    const [flipped, setFlipped] = useState(false)

    function flip() {
      setFlipped(!flipped)
      console.log("flipped")
  
    }
 
//firebase
const [content, setContent] = useState([])
const reizen = collection(db, "reizen")
useEffect(()=>{
  const getContent = async ()=>{
    const data = await getDocs(reizen);
    setContent(data.docs.map((doc)=>(
        {...doc.data(), id: doc.id}
    )

    ))  
   
  }
  getContent()
},[])
   console.log(content)
  return (
<Container fluid>

<Row xs={1} md={3} className="g-4" >
             {
     content.map((data, index)=>{
       return (
<Col md={4} className='p-5 h-25 '>
     <Card id="card" className="bg-dark text-white m-3" onClick={flip} key={index} >
          <Card.Img id="cardImg" src={data.foto} alt="Flensburg at night"  />
          <Card.ImgOverlay >
        
            <Card.Text id="back" >
      {data.tekst}
            </Card.Text>
          </Card.ImgOverlay>
              <Card.Title id="cardTitle" className='mt-5 fs-2'>{data.title}</Card.Title>
        </Card>
        
</Col>
    
     )
       })
   }
   
</Row>

  



    


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