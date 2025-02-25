const AboutMe = () => {
  return (
    <div id="about" className="pt-24">
      <div className>
        <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
          <div className="">
            <h1 className="text-2xl font-bold text-gray-50">About Me</h1>
            <span className="block border-b-2 w-10 border-[#3CCF91]"></span>
            <p className="text-gray-400 font-normal text-sm leading-relaxed pt-6 mb-4">
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
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co.com/Bg6r18V/New-Project-1.png"
              alt="Profile"
              className="rounded-full object-cover shadow-lg w-80 h-80 ring-2 ring-[#3CCF91]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
