import ContactUs from "../../Components/ContactUs/ContactUs";
import MyIdentity from "../../Components/MyIdentity/MyIdentity";
import MySkills from "../../Components/MySkills/MySkills";
import ProjectsCom from "../../Components/ProjectsCom/ProjectsCom";

const Home = () => {
  return (
    <div>
      <div>
        <MyIdentity></MyIdentity>
        <MySkills></MySkills>
        <ProjectsCom></ProjectsCom>
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Home;
