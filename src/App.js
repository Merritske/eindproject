import './App.css';
import Register from './pages/Register';
import Home from './pages/Home'
import axios from 'axios'
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import Reizen from './components/Reizen';
import ProtectedRoute from './components/ProtectedRoute';
import { FotoProvider, UserProvider } from './context';
import { db} from './firebase'
import { collection, doc, getDocs } from "firebase/firestore"



//use context of redux
// fetch("/login")
// fetch("/register")
// fetch("/reizen")

function App() {

  
  const [loggedIn, setLoggedIn] = useState(false)
  const [state, setState] = useState({
    username:"",
    password:""
  })
   //firebase foto's en reizen ophalen
const [content, setContent] = useState([])
const reizen = collection(db, "reizen")
//MongoDB reizen
const [reisM, setReisM] = useState([])
useEffect(()=>{
    let user =  JSON.parse(localStorage.getItem("user")) 
     console.log(user)
  if(user !== null && user !== "" && user !== undefined){
    setState({...state,
      username: user.username,
      password: user.password
     })
     setLoggedIn(true)
    }else  {
    console.log("not logged in")
    setLoggedIn(false)
      } 
      //firebase foto's
      const getContent = async ()=>{
        const data = await getDocs(reizen);
        setContent(data.docs.map((doc)=>(
            {...doc.data(), id: doc.id}
        )
        ))  
      }
      getContent()   ;

      //fetch reizen in Mongo
      const getReizen = async ()=>{
        fetch("/reizen", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token")
          }
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          setReisM(data)
        })}
        getReizen();
      
    
},[])

console.log(reisM)

const handleLogin = ()=> {
    axios.get("/login", {
      username: state.username,
      password: state.password
    })
      .then(res => {   
            console.log(res.data.token)
           console.log(res.data.message)
        if(res.data.message === "user not found"){
       return   alert("deze username is niet gevonden, creëer een account")
        }else if(res.data.message === "user or password is not correct"){
      return    alert ("user or password is not correct")
        }else{  
          setLoggedIn(true) 
        localStorage.setItem('user', JSON.stringify({
          username: state.username,
          password: res.data.token
        }))
        window.location = ("/")
        }
      })

  }
  console.log(state.username)
  const handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target;
   console.log(e.target)
    setState({ ...state, [name]: value });
  }
  function handleLogout(){
    localStorage.clear();
    window.location.pathname = "/"
    setLoggedIn(false)
    }
  //inschrijven in een reis

console.log(loggedIn)

  //https://v5.reactrouter.com/web/example/url-params

//https://www.freecodecamp.org/news/react-context-for-beginners/
  return (
    <div className="App">

<UserProvider.Provider value={[state, content, loggedIn, reisM ]} >
<BrowserRouter >
 <NavbarComponent handleChange={handleChange} handleLogout={handleLogout}  />

<Routes>

    <Route path='/login' element={<Login handleChange={handleChange} handleLogin={handleLogin} />}/>
  <Route path='/register' element={  <Register handleLogin={handleLogin} /> }/>
   <Route path={`/reizen/:trip`} element={ <Reizen  />} />
 <Route path="/profiel" element={
   <ProtectedRoute userInlog={state} />
 } />
<Route path='/' element={<Home handleChange={handleChange} handleLogin={handleLogin} handleLogout={handleLogout}
/>} />



</Routes>

<Footer/>
</BrowserRouter>

</UserProvider.Provider>
       </div>
  );
}

 
export default App;
