const AboutMe = () => {
  return (
    <div className="pt-24">
      <div className>
        <div className="w-10/12 md:w-10/12 lg:w-10/12 xl:container mx-auto items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
          <div className="">
            <h1 className="text-2xl font-bold text-gray-50 border-spacing-x-3.5 border-b-2 border- border-[#3CCF91] mb-4">
              About Me
            </h1>

            <p className="text-gray-400 font-normal text-sm leading-relaxed mb-4">
              Hi! I&apos;m <span className="text-[#3CCF91]">Mukit Hossen</span>.
              My fascination with computers began at an early age, sparking a
              lifelong passion for technology and problem-solving.
            </p>

            <p className="text-gray-400 text-sm mb-4">
              My <span className="text-[#3CCF91]">programming journey</span>{" "}
              took off with the{" "}
              <span className="text-[#3CCF91]">Programming Hero</span>. It was a
              challenging start, as I had no programming knowledge. However,
              through perseverance, solving complex problems, and exploring new
              frameworks, programming has become a rewarding hobby and a core
              part of my life.
            </p>

            <p className="text-gray-400 text-sm">
              My goal is to craft meaningful digital experiences that leave a
              positive and lasting impact. I’m driven by curiosity, always eager
              to embrace new challenges, learn cutting-edge technologies, and
              collaborate on innovative projects that inspire and create value
            </p>
          </div>
          <div className="flex justify-center ">
            <img
              src="https://i.ibb.co.com/z27nh0m/New-Project.png"
              alt="Profile"
              className="rounded-full object-cover shadow-lg w-48 md:w-72 h-48 md:h-72 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
