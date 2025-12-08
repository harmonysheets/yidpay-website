import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Home from '../Pages/Home'
import Features from '../Pages/Features'
import HowItWorks from '../Pages/HowItWorks'
import Organizations from '../Pages/Organizations'
import Pricing from '../Pages/Pricing'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Help from '../Pages/Help'
import Privacy from '../Pages/Privacy'
import Terms from '../Pages/Terms'

function App() {
  return (
    <Router basename="/yidpay-website">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
