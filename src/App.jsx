import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css'
import { AuthProvider } from './contexts/AuthContext';
function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
    <Router>
    <div className="min-h-screen bg-gray-50"> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </div>
    </Router>
    </AuthProvider>

  )
}


export default App
