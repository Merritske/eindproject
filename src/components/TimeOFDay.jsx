import { Container } from "react-bootstrap"
import { UserProvider } from '../context';
import { useContext} from "react"

function Time(){
    const [state, content, loggedIn] = useContext(UserProvider)


    const hours = new Date().getHours()
    let timeOfDay
    if(hours <11){
        timeOfDay = "morgen"
    }else if(hours >= 11 && hours < 13){
        timeOfDay = "middag"
    }else if(hours >= 13 && hours < 16){
    timeOfDay = "namiddag"
}else if(hours>=16 && hours < 21){
        timeOfDay = "avond"
    }else{
        timeOfDay = "nacht"
    }
    return(
        <Container className="mt-5"> 
            <h2>Goede {timeOfDay}{loggedIn? ",{state.username}": "" }!</h2>
        </Container>
    )
}
export default Time