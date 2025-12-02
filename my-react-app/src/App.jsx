import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Socials from "./pages/Socials";
import Contact from "./pages/Contact";
import CpuScheduling from "./pages/CpuScheduling";

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        {/* Main content */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />       {/* FIXED */}
            <Route path="/about" element={<About />} /> {/* FIXED */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/socials" element={<Socials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cpu-scheduling" element={<CpuScheduling />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
