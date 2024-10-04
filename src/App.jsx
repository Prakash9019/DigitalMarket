import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './components/HomePage'
import Header from './components/Header';
import Footer from './components/Footer';
import PricingPage from './components/PricingPage';
//hello
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/about" element={< PricingPage/>} />

      
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}

export default App
