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



//use context of redux
// fetch("/login")
// fetch("/register")
// fetch("/reizen")

function App() {
const [user, setUser] = useState([])

const [reis, setReis]= useState([])

// useEffect(()=>{
//   fetch("/login", {
//     method: 'POST',
//     body: JSON.stringify(user)
//       }
//       )
//         .then(res => res.json())
//         .then((data) => {
//           console.log(data)
//         })


 

 
// },[])



  return (
    <div className="App">
<Database.Provider value={ [user, reis] } > 

<BrowserRouter >
 <NavbarComponent/>

<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/login' element={<Login />}/>
  <Route path='/register' element={  <Register/> }/>
  <Route path='/reizen' element={ <Reizen /> } />
</Routes>
<Footer/>
</BrowserRouter>




    </Database.Provider> 
       </div>
  );
}

export default App;
