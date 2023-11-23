import { useState } from 'react'
import './App.css'
import Start from './components/StartPage/Start'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
