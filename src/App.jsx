import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Navbar/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Projects from "./Components/Projects/Projects"
import TextChanger from "./Components/TextChanger"


function App() {
  

  return (
    <>
      <div className="bg-purple-900 h-auto w-full overflow-hidden">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Footer />
        
      </div>
    </>
  )
}

export default App
