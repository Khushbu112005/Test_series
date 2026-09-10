import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "./pages/Home";
import TestSeries from "./pages/TestSeries";
import Quiz from "./pages/Quiz";
import Academy from "./pages/Academy";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function GlobalWrapper() {
  return (
    <div className="relative">
      {/* Common Navbar */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full px-12 z-50">
        <Navbar />
      </div>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<GlobalWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/test-series" element={<TestSeries />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
