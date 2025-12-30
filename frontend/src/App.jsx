import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

// components
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

// pages
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';

import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
    <header>
      <Navbar />
    </header>
    
    <main>
      <Outlet />
    </main>

    <Footer />
    </>
  )
}

export default App
