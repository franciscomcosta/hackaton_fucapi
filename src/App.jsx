import { useState } from 'react'
import './App.css'
import Start from './components/StartPage/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/nav/Nav'

function App() {

  return (
    <>
    <Nav />
    <div className='text-zinc-50 bg-gray-800 w-full h-screen flex items-center' >
      <BrowserRouter>
        <Routes>
          <Route path='/sobre' element={<Start />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
