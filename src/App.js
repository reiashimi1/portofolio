import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/portofolio" element={<Home />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
