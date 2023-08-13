import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Logs/Login'
import Signup from './Logs/Signup'

function Views() {
  return (
  <Routes>
    <Route path='/' element={ <Login /> }/>
    <Route path='/register' element={ <Signup /> }/>
    <Route path='*' element={ <Login /> }/>
  </Routes>
)}

export default Views