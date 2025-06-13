import './App.css'
import Navbar from './components/Navbar.jsx'
import Tech from './components/Tech.jsx'
import Projects from './components/Projects.jsx'
import Hero from './components/Hero.jsx'
import Contact from './components/Contact.jsx'

const App = () => {
  return <>
  
  <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> 

  <main className='flex flex-col items-center px-4 md:px-8 lg:px-16 '>
    <Navbar/>
    <Hero/>
    <Tech/>
    <Projects/>
    <Contact/>
  </main>

  </>
}

export default App