import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Menu from './Components/Menu'
import Items from './Components/Items'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Menu/>
      <Items/>
      <Footer/>
    </div>
  )
}

export default App