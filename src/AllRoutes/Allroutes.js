import React from 'react'

import {Routes,Route} from "react-router-dom"


import RegistrationForm from "../components/Registrationpage"
import LoginForm from '../components/Loginpage'
import { Profilepage } from '../components/Profilepage'


const Allroute = () => {
  return (
  <>
  <Routes>
    <Route path='/' element={<RegistrationForm />}></Route>
    <Route path='/login' element={<LoginForm />}></Route>
    <Route path='/profile' element={<Profilepage/>}></Route>
   
  </Routes>
  
  </>
  )
}

export default Allroute