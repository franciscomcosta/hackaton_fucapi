import { useState } from 'react'
import './App.css'
import About from './components/about/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/nav/Nav'
import Map from './components/map/Map'
function App() {

  return (
    <>
    <Nav />
    <div className='text-zinc-50 bg-gray-800 w-full h-screen flex items-center' >
      <BrowserRouter>
        <Routes>
          <Route path='/sobre' element={<About />} />
          <Route path='/map' element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
