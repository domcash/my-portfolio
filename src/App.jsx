import About from "./components/About";  
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-sky-600
    selection:tect-sky-600"> 
    <div className="fixed top-0 -z-10 h-full w-full">
    <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>
    </div>

      <div className="container mx-auto px-8">
      <Navbar />
      <Hero /> 
      <Technologies />
      <Education />
      <Experience />  
      <Projects />  
      <Contact />

      {/* Footer Section */}
      <footer className="text-center text-gray-500 mt-10 py-4">
        <p>&copy; {new Date().getFullYear()} Dominic Cash. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App