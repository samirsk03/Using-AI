import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './NavAfifa'
import Home from './Home'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

function AfifacareLayout() {
  return (
   
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default AfifacareLayout