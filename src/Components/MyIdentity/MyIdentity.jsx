import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDownload } from "react-icons/md";
import resume from "/public/My Resume_2.pdf";
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
        I am a <span className="text-gray-50">Front-End</span> Developer{" "}
      </h3>
      <p className="text-gray-400 w-full lg:max-w-3xl text-base lg:text-lg pt-5">
        I am a passionate{" "}
        <span className="text-[#3CCF91]">Junior Front-End Developer</span> with
        a growing skill set in building dynamic and responsive web applications.
        With a strong foundation in JavaScript and React, I aim to create
        user-friendly and efficient solutions.
      </p>
      <div className="flex flex-wrap items-center gap-4 mt-5">
        <Link
          to="https://github.com/MukitHossen7"
          target="_blank"
          className="flex gap-2"
        >
          <FaGithub className="text-gray-300 text-3xl" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/mukithossen"
          target="_blank"
          className="flex gap-2"
        >
          <FaLinkedin className="text-gray-300 text-3xl" />
        </Link>
        <button>
          <a
            className="flex flex-row gap-2 px-3 py-2 rounded-md border border-[#3CCF91]"
            href={resume}
            download="resume.pdf"
          >
            <MdDownload className="text-xl text-gray-300" />
            <span className="text-gray-50 text-sm font-medium">Resume</span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default MyIdentity;
