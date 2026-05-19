import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="min-h-screen bg-gray-50"> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        </div>
    </Router>
  )
}

export default App
