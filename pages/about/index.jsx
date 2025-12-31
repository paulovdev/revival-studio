import AboutSection from "../components/section/about/about";
import Nav from "../components/nav";

const About = () => {
  return (
    <>
      <Nav   />

      <main className="min-h-screen">
        <AboutSection />
      </main>
    </>
  );
};

export default About;
