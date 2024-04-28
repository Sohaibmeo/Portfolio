
import Navbar from "./components/navbar/navbar"
import About from "./sections/about/about"
import Contact from "./sections/contact/contact"
import Home from "./sections/home/home"
import Loading from "./sections/loading/loading"
import Face from "./sections/moving-face/Face"
import Projects1 from "./sections/projects1/projects"


function App() {

  return (
    <>
      <Navbar />
      <Face />
      <Loading />
      <Home />
      <About />
      <Projects1 />
      <Contact />
    </>
  )
}


export default App
