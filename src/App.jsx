import './App.css'
import About from './components/about/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/nav/Nav'
import Map from './components/map/Map'
import Start from './components/start/Start'
import Contact from './components/contacts/Contacts'

function App() {

  return (
    <>
    <Nav />
    <div className='text-zinc-50 bg-gray-800 w-full min-h-screen flex items-center' >
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Start />} />
          <Route path='/sobre' element={<About />} />
          <Route path='/map' element={<Map />} />
          <Route path='/contatos' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
