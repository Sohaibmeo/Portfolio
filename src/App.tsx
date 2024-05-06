import Navbar from "./components/navbar/Navbar";
import Projects1 from "./sections/projects1/Projects1";
import Home from "./pages/home/Home";
import Loading from "./components/loading/Loading";
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
        <Route path="old-home" element={<OldHome />} />
        <Route path="about" element={<About />} />
        <Route path="parallex" element={<Projects />} />
        <Route path="projects" element={<Projects1 />} />

        //TODO: Contact should not be a route instead some sort of modal that is available on all pages
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<div>No Route Matches this url</div>} />
      </Routes>
    </>
  );
}

export default App;
