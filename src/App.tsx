
import Navbar from "./components/navbar/navbar"
import About from "./sections/about/about"
import Contact from "./sections/contact/contact"
import Loading from "./sections/loading/loading"
import Projects1 from "./sections/projects1/projects"
import Home from "./sections/home/Home"
import OldHome from "./sections/old-home/oldHome"


function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Loading />
      <OldHome />
      <About />
      <Projects1 />
      <Contact />
    </>
  )
}


export default App
