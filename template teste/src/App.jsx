import './App.css'
import React from 'react'
import Teste1 from './teste1'
import { Route, Routes } from 'react-router'

export default  function App() {
  return (
    <Routes>
      <Route path="/teste1" element={<Teste1/>}/>
    </Routes>
  )
}

