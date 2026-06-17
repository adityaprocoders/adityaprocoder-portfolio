import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Main Content */}
      <div
        className={`transition-all duration-500 ${
          loading ? "blur-md pointer-events-none" : "blur-0"
        }`}
      >
        <section id="home">
          <Navbar />
          <Hero />
          <Skill />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </section>
      </div>

      {/* Loader Overlay */}
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <Loader />
        </div>
      )}
    </>
  );
}

export default Home;