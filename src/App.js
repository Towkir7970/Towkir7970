import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Research from "./components/Research";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div>
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Research />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
