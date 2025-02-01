import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/Home"
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="react-ui-figma-landing-page/" element={<Home />} />
          <Route path="react-ui-figma-landing-page/about" element={<About />} />
          <Route path="react-ui-figma-landing-page/services" element={<Services />} />
          <Route path="react-ui-figma-landing-page/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
