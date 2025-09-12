import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import OurWork from "./pages/OurWork";
import ContactForm from "./pages/contant";


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
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Home />
      <Services />
      <OurWork />
      <ContactForm />
    </>
  );
}
