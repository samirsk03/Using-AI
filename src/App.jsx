import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AfifaLayout from './components/AfifaCare/AfifaCareLayout'
import AfifaLayout1 from './components/AfifaCare1/AfifaCareLayout'
import MainHome from './components/MainHome'
import ChatBotLayout from './components/chatBot/ChatBotLayout'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/chatbot/*" element={<ChatBotLayout />} />
        <Route path="/afifacare/*" element={<AfifaLayout/>} />
        <Route path="/plutope/" element={<AfifaLayout1/>} />
      </Routes>
    </Router>
  )
}

export default App