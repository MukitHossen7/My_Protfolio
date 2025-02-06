import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";
const ProjectsCom = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("Projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div
      id="Project"
      className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto pt-24"
    >
      <motion.div
        variants={fadeIn("bottom", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.8 }}
      >
        <div className="mb-3 flex justify-center">
          <div className=" flex flex-col">
            <h1 className="text-2xl font-bold text-gray-50">
              All Creative Works.
            </h1>
            <span className="block border-b-2 w-20 border-[#3CCF91]"></span>
          </div>
        </div>
        <p className="text-gray-400 mb-8 text-center">
          Here’s some of my projects that I have worked on.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {projects?.map((project, index) => (
          <Cards key={index} project={project}></Cards>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCom;
