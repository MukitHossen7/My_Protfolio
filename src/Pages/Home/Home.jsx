import AboutMe from "../../Components/AboutMe/AboutMe";
import MyIdentity from "../../Components/MyIdentity/MyIdentity";
// import MySkills from "../../Components/MySkills/MySkills";
import ProjectsCom from "../../Components/ProjectsCom/ProjectsCom";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
  return (
    <div>
      <div>
        <MyIdentity></MyIdentity>
        <AboutMe></AboutMe>
        {/* <MySkills></MySkills> */}
        <Skills></Skills>
        <ProjectsCom></ProjectsCom>
        {/* <ContactUs></ContactUs> */}
      </div>
    </div>
  );
};

export default Home;
