const MySkills = () => {
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

  return (
    <div className=" flex flex-col items-center ">
      <div className="w-10/12 md:w-10/12 lg:w-10/12 xl:container mx-auto">
        <h1 className="text-2xl font-bold text-gray-50 text-center mb-6 ">
          My Skills
        </h1>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-8">
          {frontendSkills.map((skill, index) => (
            <div
              key={index}
              className="p-6 border bg-slate-950  border-gray-600 rounded-lg flex flex-col items-center w-full md:w-44 h-32"
            >
              {typeof skill.image === "string" &&
              skill.image.startsWith("http") ? (
                <div className="">
                  <img
                    src={skill.image}
                    className="w-12 h-12 object-cover "
                    alt={skill.name}
                  />
                </div>
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
