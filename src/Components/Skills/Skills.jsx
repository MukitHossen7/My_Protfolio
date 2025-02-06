const Skills = () => {
  const mySkills = [
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      name: "HTML5",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      name: "CSS3",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      name: "Javascript",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      name: "TailwindCSS",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      name: "React",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      name: "Next.js",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      name: "git",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      name: "Node.js",
    },
    {
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      name: "Mongodb",
    },
  ];
  console.log(mySkills);
  return (
    <div
      id="Skills"
      className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto pt-24"
    >
      <div className="mb-8 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-gray-50 pb-1">My Skills</h1>
        <span className="block border-b-2 w-12 border-[#3CCF91]"></span>
      </div>

      {/* Skills Grid */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14">
        {mySkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-[#070D1E] px-2 pt-5 pb-9 shadow-2xl rounded-3xl"
          >
            <img
              className="w-16 h-16 object-cover"
              src={skill?.image}
              alt={skill?.name}
            />
            <p className="text-gray-300 text-base font-bold pt-4">
              {skill?.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
