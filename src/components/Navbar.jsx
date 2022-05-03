import React from 'react'
import Login from './Login'
import { useState } from 'react';

function Navbar() {
    const [user, setUser]= useState(true)

  return (
    <div>



<ul className="nav d-flex justify-content-between bg-secondary p-2 mt-3 mx-5 rounded">
  <li className="nav-item w-25 fs-1 text-pop-up-bottom">
    <a className="nav-link text-danger"  href="#">HOME</a>
  </li>
{
    user? <ul className="nav d-flex justify-content-around"> <li className="nav-item  text-uppercase fs-1 text-pop-up-bottom">
    <a className="nav-link text-danger" href="#">Reisverslag</a>
  </li>
  <li className="nav-item text-uppercase fs-1 text-pop-up-bottom">
    <a className="nav-link text-danger" href="#">Extra's</a>
  </li> </ul>:  <Login/>
}
 
 
</ul>



    </div>
  )
}

export default Navbar