import './App.css'
import Header from './components/Header'
import Description from './components/Description'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import Extensions from './components/Extensions'
import Contact from './components/Contact'
import Features from './components/Features'

function App() {
  return (
    <div className='main'>
      <Header />
      <Description />
      <Features />
      <Extensions />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
