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
import { FotoProvider, UserProvider } from './Context';
import { db} from './firebase'
import { collection, doc, getDocs } from "firebase/firestore"


//use context of redux
// fetch("/login")
// fetch("/register")
// fetch("/reizen")

function App() {

  const [state, setState] = useState({
    username:"",
    password:""
  })
   //firebase fot's en reizen ophalen
const [content, setContent] = useState([])
const reizen = collection(db, "reizen")

useEffect(()=>{
    let user =  JSON.parse(localStorage.getItem("user")) 
     console.log(user)
  if(user !== null && user !== ""){
    setState({...state,
      username: user.username
     })
    }else  {
    console.log("not logged in")
      } 
      //firebase foto's
      const getContent = async ()=>{
        const data = await getDocs(reizen);
        setContent(data.docs.map((doc)=>(
            {...doc.data(), id: doc.id}
        )
        ))  
      }
      getContent()   
},[])



const handleLogin = ()=> {

    axios.post("/login", {
      username: state.username,
      password: state.password
    })
      .then(res => {
        console.log(res.data)
        localStorage.setItem('user', JSON.stringify({
          username: state.username,
          token: res.data.token
        }))
      })
  }
  console.log(state.username)
  const handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target;
   console.log(e.target)
    setState({ ...state, [name]: value });
  
  }
  



  //https://v5.reactrouter.com/web/example/url-params

//https://www.freecodecamp.org/news/react-context-for-beginners/
  return (
    <div className="App">

<UserProvider.Provider value={[state, content ]} >
<BrowserRouter >
 <NavbarComponent   />

<Routes>

    <Route path='/login' element={<Login handleChange={handleChange} handleLogin={handleLogin}/>}/>
  <Route path='/register' element={  <Register handleLogin={handleLogin} /> }/>

   <Route path={`/reizen/:trip`} element={
      // <ProtectedRoute userInlog={state} />
      <Reizen  />
 } />
<Route path='/' element={<Home handleChange={handleChange} handleLogin={handleLogin} />} />



</Routes>

<Footer/>
</BrowserRouter>

</UserProvider.Provider>
       </div>
  );
}

export default App;
