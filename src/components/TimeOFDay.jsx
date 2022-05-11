import { Container } from "react-bootstrap"

function Time(){



    const hours = new Date().getHours()
    let timeOfDay
    if(hours <12){
        timeOfDay = "morgen"
    }else if(hours >= 12 && hours < 17){
        timeOfDay = "middag"
    }else if(hours>=17 && hours < 20){
        timeOfDay = "avond"
    }else{
        timeOfDay = "nacht"
    }
    return(
        <Container className="mt-5"> 
            <h2>Goede {timeOfDay}!</h2>
        </Container>
    )
}
export default Time