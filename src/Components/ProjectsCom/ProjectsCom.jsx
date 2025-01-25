import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";

const ProjectsCom = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("Projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="bg-black w-10/12 md:w-10/12 lg:w-10/12 xl:container mx-auto min-h-screen pt-24">
      <div className="mb-3 flex justify-center">
        <div className=" flex flex-col">
          <h1 className="text-2xl font-bold text-gray-50">
            All Creative Works.
          </h1>
        </div>
      </div>
      <p className="text-gray-400 mb-8 text-center">
        Here’s some of my projects that I have worked on.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {projects?.map((project, index) => (
          <Cards key={index} project={project}></Cards>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCom;
