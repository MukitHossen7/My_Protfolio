import ContactUs from "../../Components/ContactUs/ContactUs";
import MyIdentity from "../../Components/MyIdentity/MyIdentity";
import MySkills from "../../Components/MySkills/MySkills";

const Home = () => {
  return (
    <div>
      <div>
        <MyIdentity></MyIdentity>
        <MySkills></MySkills>
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Home;
