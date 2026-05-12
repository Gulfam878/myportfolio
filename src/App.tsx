import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; 
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import ChatBot from "@/components/ChatBot";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
          <Experience />
        <TechStack />
        <Projects />
      
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <ChatBot />
    </div>
  );
}
