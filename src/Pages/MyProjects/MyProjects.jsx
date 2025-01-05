import { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("Projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 md:w-10/12 lg:w-10/12 xl:container mx-auto mt-14">
      {projects.map((project) => (
        <Cards key={project._id} project={project}></Cards>
      ))}
    </div>
  );
};

export default MyProjects;
