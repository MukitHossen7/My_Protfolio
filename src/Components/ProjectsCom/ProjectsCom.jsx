// import { useEffect, useState } from "react";
// import Cards from "../Cards/Cards";
// import { Link } from "react-router-dom";

const ProjectsCom = () => {
  // const [projects, setProjects] = useState([]);
  // useEffect(() => {
  //   fetch("Projects.json")
  //     .then((res) => res.json())
  //     .then((data) => setProjects(data));
  // }, []);
  const projects = [
    {
      title: "Opinionmeter",
      description:
        "Analyze whether an opinion on a specific topic is positive or negative based on recent tweets.",
      tools: ["React", "Python", "Chart.js"],
      link: "https://your-link.com",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "creative@home",
      description: "A website that provides roadmaps for programming fields.",
      tools: ["JavaScript", "Sass"],
      link: "https://your-link.com",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Prayer Time API",
      description:
        "API to get daily prayer times for any city in the world, based on Muslim Pro.",
      tools: ["Python", "Flask", "BeautifulSoup"],
      link: "https://your-link.com",
      image: "https://via.placeholder.com/150",
    },
  ];
  return (
    // <div className="w-10/12 md:w-10/12 lg:w-10/12 xl:container mx-auto mt-20 pb-10">
    //   <h2 className="text-gray-100 font-semibold text-4xl pb-7 text-center">
    //     My Projects
    //   </h2>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {projects.map((project) => (
    //       <Cards key={project._id} project={project}></Cards>
    //     ))}
    //   </div>
    //   <div className="flex flex-col justify-center items-center mt-10">
    //     <Link to="/projects">
    //       <button className="btn">Show All</button>
    //     </Link>
    //   </div>
    // </div>
    <div className="bg-black min-h-screen p-8">
      <h1 className="text-white text-3xl font-bold mb-6">
        All Creative Works.
      </h1>
      <p className="text-gray-400 mb-8">
        Here’s some of my projects that I have worked on.{" "}
        <a href="#explore-more" className="text-blue-400 hover:underline">
          Explore more →
        </a>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-700 px-2 py-1 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Explore Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCom;
