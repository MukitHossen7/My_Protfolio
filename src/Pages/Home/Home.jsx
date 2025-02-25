import AboutMe from "../../Components/AboutMe/AboutMe";
import ContactUs from "../../Components/ContactUs/ContactUs";
import MyIdentity from "../../Components/MyIdentity/MyIdentity";
import ProjectsCom from "../../Components/ProjectsCom/ProjectsCom";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
  return (
    <div>
      <MyIdentity></MyIdentity>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <ProjectsCom></ProjectsCom>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
