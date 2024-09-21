import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
// import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className=" bg-[#121212] text-white">
      {/* <Navbar></Navbar> */}
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}
