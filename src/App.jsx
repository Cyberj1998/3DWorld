import './App.css'
import './index.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import { Home, About, Contact } from './Pages'

function App() {

  return (
    <main className="bg-[#b5b5b5]">
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
