import Navbar from "./components/navbar/Navbar";
import Projects1 from "./sections/projects1/Projects1";
import Home from "./pages/home/Home";
import Loading from "./pages/loading/Loading";
import OldHome from "./sections/old-home/OldHome";
import About from "./pages/about/About";
import Contact from "./sections/contact/Contact";
import CursorAnimation from "./components/cursor-animation/CursorAnimation";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Loading />
      <CursorAnimation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />

        <Route path="old-home" element={<OldHome />} />
        <Route path="old-projects" element={<Projects1 />} />
        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<div>No Route Matches this url</div>} />
      </Routes>
    </>
  );
}

export default App;
