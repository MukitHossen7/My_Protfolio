import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiSaveDown1 } from "react-icons/ci";
import { Link } from "react-router-dom";
const MyIdentity = () => {
  return (
    <div className="w-10/12 md:w-10/12 lg:w-10/12 xl:container mx-auto pt-10">
      <p className="text-[#3CCF91] flex items-end text-3xl font-semibold pb-1">
        Hey there!, I&apos;m-
      </p>
      <h1 className="text-7xl font-semibold tracking-wide">
        <span className="text-gray-100">Mukit Hossen</span>
      </h1>
      <h3 className="text-gray-500 text-3xl font-semibold pt-5">
        I am a <span className="text-gray-100">Front-End React</span> Developer{" "}
      </h3>
      <p className="text-gray-400 w-full lg:max-w-3xl  text-lg pt-5">
        I am a passionate{" "}
        <span className="text-[#3CCF91]">Junior React Developer</span> with a
        growing skill set in building dynamic and responsive web applications.
        With a strong foundation in JavaScript and React, I aim to create
        user-friendly and efficient solutions.
      </p>
      <div className="flex items-center gap-4 mt-5">
        <Link
          to="https://github.com/MukitHossen7"
          target="_blank"
          className="flex gap-2 px-3 py-2 bg-[#292929] rounded-md"
        >
          <FaGithub className="text-[#3CCF91] text-lg" />
          <span className="text-gray-100 text-sm font-medium">GitHub</span>
        </Link>

        <Link
          to="https://github.com/MukitHossen7"
          target="_blank"
          className="flex gap-2 px-3 py-2 bg-[#292929] rounded-md"
        >
          <FaLinkedin className="text-[#3CCF91] text-lg" />
          <span className="text-gray-100 text-sm font-medium">LinkedIn</span>
        </Link>
        <Link className="flex gap-2 px-3 py-2 bg-[#292929] rounded-md">
          <CiSaveDown1 className="text-[#3CCF91] text-lg font-bold" />
          <span className="text-gray-100 text-sm font-medium">
            Download Resume
          </span>
        </Link>
      </div>

      <div className="mt-9">
        <div className="relative inline-flex  group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        </div>
      </div>
    </div>
  );
};

export default MyIdentity;
