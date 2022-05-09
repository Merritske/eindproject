import GoogleMapReact from 'google-map-react'
import React, { useEffect, useState } from 'react'
import { Container, Card, CardGroup, Fade, Row, Col } from 'react-bootstrap'

import { db} from '../firebase'
import { collection, doc, getDocs } from "firebase/firestore"


function Cards({image, title, tekst}) {

    const [flipped, setFlipped] = useState(false)


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




//bij flip nog aanpassen dat dan de tekst goed getoond wordt en de naam blijft staan
//knop om aan te melden voor de reis => login vereist
//meer info


  return (
<Container fluid  >

<Row  md={1}  lg={2} xl={3} >
             {
     content.map((data, index)=>{
       return (
<Col className=' h-25' key={index} onMouseEnter ={(e)=>setFlipped(true)} onMouseLeave={(e)=>setFlipped(false)}>

     <Card  id="card" className="bg-dark text-white mx-auto m-3 h-75 "  >
  
  <Card.Img id="cardImg" src={data.foto} alt="Flensburg at night" />
    
     { flipped &&   <Card.ImgOverlay >
      
            <Card.Text className='back' >
      {data.tekst}
            </Card.Text>
            <Card.Title id="cardTitleBack" className='mt-4 fs-2'>{data.title}</Card.Title> 
          </Card.ImgOverlay>}
          
       <Card.Title  id="cardTitle" className='mt-4 fs-2'>{data.title}</Card.Title> 
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