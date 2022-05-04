import React from 'react'
import github from "../images/github_icon.png"

function Footer() {
  return (
    <div className='container-xl d-block w-100 border border-5 border-danger bg-secondary rounded-pill   mx-auto'>
<div className='row align-items-center justify-content-center'> 
<div className='col-sm-3'>
  <h4 className='text-white'>
         Merritske 2022
         </h4> 
</div>
<div className='col-sm-2'>
<a href='https://github.com/Merritske/eindproject' rel='noreferrer' target="_blank"><img src={github} className=" w-25 m-1 bg-white rounded-circle" alt="githublink" /> </a> 
</div>

    
     
</div>
   
    </div>
  )
}

export default Footer