import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import OurWork from "./pages/OurWork";
import ContactForm from "./pages/ContactForm";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [theme, setTheme] = useState("light");

  // Ensure theme is applied when app loads
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Router>
      {/* Navbar stays on all pages */}
      <Navbar theme={theme} setTheme={setTheme} />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourWork" element={<OurWork />} />
        <Route path="/contact" element={<ContactForm />} />
        {/* Catch-all for 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      {/* Footer stays on all pages */}
      <Footer />
    </Router>
  );
}
