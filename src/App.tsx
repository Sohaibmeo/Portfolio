
import Navbar from "./components/navbar/Navbar"
import Projects1 from "./sections/projects1/Projects1"
import Home from "./sections/home/Home"
import Loading from "./components/loading/Loading"
import OldHome from "./sections/old-home/OldHome"
import About from "./sections/about/About"
import Contact from "./sections/contact/Contact"
import Parallex from "./sections/parallex/Parallex"

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Parallex />
      <Loading />
      <OldHome />
      <About />
      <Projects1 />
      <Contact />
    </>
  )
}


export default App
