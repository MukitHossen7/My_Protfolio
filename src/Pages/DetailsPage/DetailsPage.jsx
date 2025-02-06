import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("./public/Projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  const project = projects.find((project) => project._id === parseInt(id));
  console.log(project);
  return (
    <div className="w-11/12 md:w-11/12 lg:11/12 mx-auto p-7 bg-gray-900 text-white  rounded-lg my-10">
      <img
        src={project?.image}
        alt={project?.name}
        className="w-full h-full object-cover rounded-lg"
      />
      <h1 className="text-2xl lg:text-3xl font-bold mt-4 text-gray-100">
        {project?.name}
      </h1>
      <p className="max-w-4xl text-gray-200 mt-2 font-medium">
        {project?.description}
      </p>
      <h2 className="text-xl font-semibold mt-4 text-gray-100">Technology</h2>
      <div className="flex flex-wrap gap-2 text-gray-400 mt-3">
        {project?.all_features?.map((feature, index) => (
          <p
            key={index}
            className="px-2 py-1 border border-gray-500 rounded-full text-sm text-gray-200"
          >
            {feature}
          </p>
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-gray-100">
          Project Improvements
        </h3>
        {project?.project_improvements?.length === 0 ? (
          <p className="text-gray-300 font-medium text-lg text-center">
            I have no idea now.
          </p>
        ) : (
          <ul className="list-disc list-inside text-gray-300 text-sm pl-3">
            {project?.project_improvements?.map((improvement, index) => (
              <li key={index}>{improvement}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
