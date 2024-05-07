import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Loading from "./pages/loading/Loading";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
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
        <Route path="contact" element={<Contact />} />

        <Route
          path="*"
          element={
            <div
              className="section"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              No Route Matches this url
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
