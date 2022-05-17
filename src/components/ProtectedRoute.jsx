import React, {useState} from 'react'
import { Route, useNavigate, Navigate } from 'react-router-dom'
import Profiel from '../pages/Profiel'

function ProtectedRoute() {
    const [userInlog, setUserInlog] = useState('')
        let navigate= useNavigate()
    let authenticated = JSON.parse(localStorage.getItem('user')).username
    if(authenticated){
      setUserInlog(authenticated)
      navigate('/profiel')
    }



    return(
        <>
        <Profiel />
        </>
    )
}
    export default ProtectedRoute

//function ProtectedRoute({component : Component, ...restOfProps}) {

//     const [userInlog, setUserInlog] = useState('')

//     let navigate= useNavigate()
//     let authenticated = JSON.parse(localStorage.getItem('user')).username
//     if(authenticated){
//       setUserInlog(authenticated)
//       navigate('/reizen')
//     }

//   return (
//     <Route
//     {...restOfProps}
//     render = {(props)=>
//     authenticated ? <Component {...props} /> : <Navigate to="/login" />}
//     />)
//}

//export default ProtectedRoute

