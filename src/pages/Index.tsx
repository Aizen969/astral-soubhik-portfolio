import BlackHoleHero from "@/components/BlackHoleHero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import FloatingNavigation from "@/components/FloatingNavigation";

const Index = () => {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <div className="min-h-screen">
        <BlackHoleHero />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <FloatingNavigation />
      </div>
    </>
  );
};

export default Index;
