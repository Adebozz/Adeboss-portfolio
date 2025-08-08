import Image from "next/image";
import Header from "../../components/HeaderSection";
import About from "../../components/AboutSection";
import Skills from "../../components/SkillsSection";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Skills />
    </>
  );
}
