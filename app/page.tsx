import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Background orbs */}
      <div
        style={{
          position: "fixed",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "#ff6b6b",
          top: "-200px",
          right: "-100px",
          filter: "blur(100px)",
          opacity: 0.12,
          pointerEvents: "none",
          zIndex: 0,
          transition: "opacity 0.4s",
        }}
      />
      <div
        style={{
          position: "fixed",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "#6bcbff",
          bottom: "10%",
          left: "-150px",
          filter: "blur(100px)",
          opacity: 0.12,
          pointerEvents: "none",
          zIndex: 0,
          transition: "opacity 0.4s",
        }}
      />
      <div
        style={{
          position: "fixed",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "#ffd93d",
          top: "40%",
          right: "10%",
          filter: "blur(100px)",
          opacity: 0.12,
          pointerEvents: "none",
          zIndex: 0,
          transition: "opacity 0.4s",
        }}
      />

      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
