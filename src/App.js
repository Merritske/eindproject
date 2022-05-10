import './App.css';
import Register from './components/Register';
import Home from './components/Home'

import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { Database } from './context/index';
import { useEffect, useState } from 'react';
import Reizen from './components/Reizen';
import ProtectedRoute from './components/ProtectedRoute';



//use context of redux
// fetch("/login")
// fetch("/register")
// fetch("/reizen")

function App() {

  const [state, setState] = useState({
    username: "",
    password: ""
  })


 
  function handleLogin() {
  
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

  const handleChange = e => {
    const { name, value } = e.target;
    //    console.log(e.target)
    setState({ ...state, [name]: value });
  }



  return (
    <div className="App">
<Database.Provider value={ [user ] }> 

<BrowserRouter >
 <NavbarComponent/>

<Routes>
<Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login handleChange={handleChange} handleLogin={handleLogin} />}/>
  <Route path='/register' element={  <Register/> }/>
 <Route path='/reizen' element={
      <ProtectedRoute userInlog={userInlog} />
 } />


</Routes>

<Footer/>
</BrowserRouter>




    </Database.Provider> 
       </div>
  );
}

export default App;
