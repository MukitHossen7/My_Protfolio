import { useState } from "react";

const MySkills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const frontendSkills = [
    {
      name: "HTML5",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "Tailwind CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "JavaScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
  ];

  const toolsSkills = [
    {
      name: "Npm",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
    },
    { name: "Git", image: "🔧" },
    { name: "Vite", image: "⚡" },
    {
      name: "VS Code",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    { name: "Figma", image: "🎨" },
  ];

  const backendSkills = [
    {
      name: "Node.js(Basic)",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js(Basic)",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    {
      name: "MongoDB(CRUD)",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
  ];

  return (
    <div className=" flex flex-col items-center py-20">
      <div className="w-10/12 md:w-10/12 lg:w-10/12 xl:container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-100">
          Skills
        </h1>

        {/* Tabs */}
        <div className="flex justify-center items-center space-x-4 mb-8 ">
          <div className="border border-gray-400 flex gap-2">
            <button
              onClick={() => setActiveTab("frontend")}
              className={`px-6 py-2 rounded-xl ${
                activeTab === "frontend"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Front-End
            </button>
            <button
              onClick={() => setActiveTab("tools")}
              className={`px-6 py-2 rounded-xl ${
                activeTab === "tools"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Tools
            </button>
            <button
              onClick={() => setActiveTab("backend")}
              className={`px-6 py-2 rounded-xl ${
                activeTab === "backend"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Back-End
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-8">
          {(activeTab === "frontend"
            ? frontendSkills
            : activeTab === "tools"
            ? toolsSkills
            : backendSkills
          ).map((skill, index) => (
            <div
              key={index}
              className="p-6 border bg-slate-950  border-gray-600 rounded-lg flex flex-col items-center w-full md:w-44 h-32"
            >
              {typeof skill.image === "string" &&
              skill.image.startsWith("http") ? (
                <img
                  src={skill.image}
                  className="w-12 h-12 object-cover"
                  alt={skill.name}
                />
              ) : (
                <span className="text-4xl">{skill.image}</span>
              )}

              <p className="text-gray-100 font-medium mt-3">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
