import Navbar from "./components/navbar/Navbar";
import Home from "./pages/landing/Home";
import Loading from "./pages/loading/Loading";
import CursorAnimation from "./components/cursor-animation/CursorAnimation";
import useLenis from "./utils/helper/lenisScroll";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

function App() {
  useLenis();

  return (
    <>
      <Navbar />
      <Loading />
      <CursorAnimation />
      <Home/>
      <Projects />
      <Contact />
    </>
  );
}

export default App;
