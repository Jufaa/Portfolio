import './App.css';
import { Background, Footer, NavBar } from './components';
import { Banner, Contact, Info, Projects, Skills } from './pages';

function App() {
  return (
    <>
      <div className="App" id="home">
        <NavBar />
        <Banner />
        <Skills />
        <Info />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <Background />
    </>
  );
}

export default App;
