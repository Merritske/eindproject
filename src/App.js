import './App.css';
import Register from './components/Register';
import Home from './components/Home'

import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



//use context of redux
// fetch("/login")
// fetch("/register")
// fetch("/reizen")

function App() {


  return (
    <div className="App">


     



<BrowserRouter>
 <NavbarComponent/>

<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/register' element={  <Register/> }/>
</Routes>
<Footer/>
</BrowserRouter>



    </div>
  );
}

export default App;
