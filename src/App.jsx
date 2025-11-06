import './App.css'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='font-sans'>
      <Navbar/>
      <Hero/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </div>
  )
}

export default App
