import './App.css';
import Register from './components/Register';
import Home from './components/Home'
import axios from 'axios'
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import Reizen from './components/Reizen';
import ProtectedRoute from './components/ProtectedRoute';
import { UserProvider } from './Context';



//use context of redux
// fetch("/login")
// fetch("/register")
// fetch("/reizen")

function App() {

  const [state, setState] = useState({
    username:"",
    password:""
  })
   
useEffect(()=>{
    let user =  JSON.parse(localStorage.getItem("user")) 
     console.log(user)
  if(user !== null && user !== ""){
    setState({...state,
      username: user.username
     })
    }else if(user === "" || user === null) {
    console.log("not logged in")
      } 
     
},[])


const handleLogin = ()=> {

    axios.post("http://localhost:5001/login", {
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
  

//https://www.freecodecamp.org/news/react-context-for-beginners/
  return (
    <div className="App">

<UserProvider.Provider value={[state, ]} >
<BrowserRouter >
 <NavbarComponent   />

<Routes>
<Route path='/' element={<Home handleChange={handleChange} handleLogin={handleLogin} />} />
    <Route path='/login' element={<Login />}/>
  <Route path='/register' element={  <Register/> }/>
 <Route path='/reizen' element={
      // <ProtectedRoute userInlog={state} />
      <Reizen />
 } />


</Routes>

<Footer/>
</BrowserRouter>

</UserProvider.Provider>
       </div>
  );
}

export default App;
