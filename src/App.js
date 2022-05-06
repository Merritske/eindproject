import './App.css';
import Extras from './components/Extras';
import Reisverslag from './components/Reisverslag';
import Home from './components/Home'

import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';




function App() {


  return (
    <div className="App">


      <NavbarComponent/>

<Home/>
<br/>
<Reisverslag/>
<Extras/>
<Footer/>




    </div>
  );
}

export default App;
