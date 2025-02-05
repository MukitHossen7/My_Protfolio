const DetailsPage = () => {
  const project = {
    _id: "2",
    name: "Movie Portal",
    image: "https://i.ibb.co.com/McWfFwg/Screenshot-2025-01-25-235614.png",
    description:
      "Movie Portal is a dynamic and user-friendly platform that streamlines movie exploration, addition, and management. Designed for movie enthusiasts, it offers a seamless experience with a clean, responsive interface and robust features",
    features: ["React.js", "Node.js", "Express.js", "MongoDB"],
    live_link: "https://movie-portal-f63b6.web.app/",
    github_link: "https://github.com/MukitHossen7/B10A10-Movie-Protal",
  };
  return (
    <div className="w-10/12 mx-auto p-4 bg-gray-900 text-white  rounded-lg mt-10">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover rounded-lg"
      />
      <h1 className="text-2xl font-bold mt-4">{project.name}</h1>
      <p className="text-gray-300 mt-2">{project.description}</p>
      <h2 className="text-xl font-semibold mt-4">Features:</h2>
      <ul className="list-disc list-inside text-gray-400">
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="mt-4 flex gap-4">
        <a
          href={project.live_link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Live Site
        </a>
        <a
          href={project.github_link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default DetailsPage;
