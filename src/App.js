import CoursePage from "./Routers/CoursePage/CoursePage";
import Home from "./Routers/Home/Home";
import AboutPage from "./Routers/AboutPage/AboutPage";
import ContactPage from "./Routers/ContactPage/ContactPage";
import ProjectPage from "./Routers/ProjectPage/ProjectPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/course" element={<CoursePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
