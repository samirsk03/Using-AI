import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AfifaLayout from './components/AfifaCare/AfifaCareLayout'
import MainHome from './components/MainHome'
import ChatBotLayout from './components/chatBot/ChatBotLayout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/chatbot/*" element={<ChatBotLayout />} />
        <Route path="/afifacare/*" element={<AfifaLayout/>} />
      </Routes>
    </Router>
  )
}

export default App