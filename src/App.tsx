import Navbar from "./components/navbar/Navbar";
import Home from "./pages/landing/Home";
import Loading from "./pages/loading/Loading";
import Contact from "./pages/contact/Contact";
import CursorAnimation from "./components/cursor-animation/CursorAnimation";
import { Route, Routes } from "react-router-dom";
import useLenis from "./utils/helper/lenisScroll";

function App() {
  useLenis();

  return (
    <>
      <Navbar />
      <Loading />
      <CursorAnimation />
      <Routes>
        <Route index element={<Home />} />
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
