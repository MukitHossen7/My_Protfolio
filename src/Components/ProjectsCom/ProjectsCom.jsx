import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";

const ProjectsCom = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("Projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="w-10/12 md:w-10/12 lg:w-10/12 xl:container mx-auto mt-8 pb-10">
      <h2 className="text-gray-100 font-semibold text-3xl pb-7 text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Cards key={project._id} project={project}></Cards>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <Link to="/projects">
          <button className="btn">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsCom;
