import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Screener from './pages/Screener'
import Calculations from './pages/Calculations'
import Mos from './pages/Mos'
import References from './pages/References'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Screener" element={<Screener />} />
        <Route path="/Calculations" element={<Calculations />} />
        <Route path="/Mos" element={<Mos />} />
        <Route path="/References" element={<References/>} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
