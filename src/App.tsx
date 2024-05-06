
import Navbar from "./components/navbar/Navbar"
import Projects1 from "./sections/projects1/Projects1"
import Home from "./sections/home/Home"
import Loading from "./components/loading/Loading"
import OldHome from "./sections/old-home/OldHome"
import About from "./sections/about/About"
import Contact from "./sections/contact/Contact"
import Parallex from "./sections/parallex/Parallex"
import ScrollProgress from "./components/scroll-progress/ScrollProgress"
import CursorProvider from "./contexts/CursorAnimation"
import CursorAnimation from "./components/cursor-animation/CursorAnimation"

function App() {

  return (
    <CursorProvider>
      <CursorAnimation />
      <Loading />
      <Navbar />

      <ScrollProgress />
      <Home />
      <Parallex />
      <OldHome />
      <About />
      <Projects1 />
      <Contact />
    </CursorProvider>
  )
}


export default App
