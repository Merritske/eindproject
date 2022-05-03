import React from 'react'

export default function Login() {
  return (
    <div>
        
    <div className="row g-2 ">
  <div className="col-md ">
      <input type="text" className="form-control" id="floatingInputGrid" placeholder="username" value="username"/>
      </div>
      <div className="col-md ">
      <input type="text" className="form-control" id="floatingInputGridPass" placeholder="password" value="password"/>
    </div>
  <div className="col-md">
     <button className="btn btn-outline-dark btn-success " type="button" >LOG IN</button>
     <button className="btn btn-outline-secondary btn-warning " type="button" >Create login</button>
  </div>
</div>
    </div>
  )
}
