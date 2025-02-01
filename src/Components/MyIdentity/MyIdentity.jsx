import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiSaveDown1 } from "react-icons/ci";
import { Link } from "react-router-dom";
const MyIdentity = () => {
  return (
    <div
      id="myIdentity"
      className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto pt-20"
    >
      <p className="text-[#3CCF91] flex items-end text-lg md:text-xl lg:text-3xl font-semibold pb-1">
        Hey there!, I&apos;m-
      </p>
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-wide">
        <span className="text-gray-50">Mukit Hossen</span>
      </h1>
      <h3 className="text-gray-400 text-xl md:text-2xl lg:text-3xl font-semibold pt-5">
        I am a <span className="text-gray-50">Frontend React</span> Developer{" "}
      </h3>
      <p className="text-gray-400 w-full lg:max-w-3xl text-base lg:text-lg pt-5">
        I am a passionate{" "}
        <span className="text-[#3CCF91]">Junior React Developer</span> with a
        growing skill set in building dynamic and responsive web applications.
        With a strong foundation in JavaScript and React, I aim to create
        user-friendly and efficient solutions.
      </p>
      <div className="flex flex-wrap items-center gap-4 mt-5">
        <Link
          to="https://github.com/MukitHossen7"
          target="_blank"
          className="flex gap-2 px-3 py-2 bg-[#292929] rounded-md"
        >
          <FaGithub className="text-[#3CCF91] text-lg" />
          <span className="text-gray-50 text-sm font-medium">GitHub</span>
        </Link>

        <Link
          to="www.linkedin.com/in/mukithossen"
          target="_blank"
          className="flex gap-2 px-3 py-2 bg-[#292929] rounded-md"
        >
          <FaLinkedin className="text-[#3CCF91] text-lg" />
          <span className="text-gray-50 text-sm font-medium">LinkedIn</span>
        </Link>
        <Link className="flex flex-row gap-2 px-3 py-2 bg-[#292929] rounded-md">
          <CiSaveDown1 className="text-[#3CCF91] text-lg font-bold" />
          <span className="text-gray-50 text-sm font-medium">
            Download Resume
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MyIdentity;
