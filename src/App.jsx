import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    const sectionId = path === '/' ? 'about' : path.replace('/', '')
    const sectionElement = document.getElementById(sectionId)

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.pathname])

  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
