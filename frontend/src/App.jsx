import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

// components
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

// pages
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';


function App() {

  return (
    <>
    <header>
      <Navbar />
    </header>
    <main>
      <HomePage />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default App
