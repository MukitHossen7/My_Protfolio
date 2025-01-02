const MySkills = () => {
  const skills = [
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
      name: "MongoDB",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
  ];
  return (
    <div className="pt-28 w-10/12 md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:container mx-auto">
      <h2 className="text-4xl font-semibold bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 text-transparent bg-clip-text text-center">
        My Skills
      </h2>
      <p className="text-gray-100 font-semibold text-base text-center pt-4">
        I have a vast experience in the following web technologies
      </p>
      <section className="pb-20 pt-12  text-white">
        <div className=" mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-8 rounded-xl bg-slate-900 ${skill.color} shadow-lg transform transition-all duration-300 hover:scale-105`}
              >
                <img
                  src={skill.image}
                  className="w-24 h-24 object-cover  mb-6"
                ></img>
                <h3 className="text-lg font-semibold text-gray-100">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MySkills;
