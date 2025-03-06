import './App.css'
import React from 'react'
import Teste1 from './teste1'
import { Route, Routes } from 'react-router'
import Teste2 from './teste2'

export default function App() {
  return (
    <Routes>
      <Route path="/teste1" element={<Teste1 />} />
      <Route path="/teste2" element={<Teste2 />} />
    </Routes>
  )
}

