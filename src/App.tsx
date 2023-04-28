import './App.css'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Background from './components/Background.tsx'

import Info from './components/Info'
function App() {

  return (
    <>
    
    
    <div className="App" id="home">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Info/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
        <Background/>
    </>
  )
}

export default App
