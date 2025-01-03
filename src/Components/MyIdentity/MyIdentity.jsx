import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Link } from "react-router-dom";
const MyIdentity = () => {
  return (
    <div className="w-10/12 md:w-10/12 lg:w-10/12 xl:container mx-auto pt-10">
      <p className="text-slate-100 flex items-end text-xl font-semibold pb-3">
        Hey👋!
      </p>
      <h1 className=" text-6xl font-semibold tracking-wide text-white">
        <span className="bg-gradient-to-r from-purple-600 via-cyan-500 via-sky-600  to-pink-600 text-transparent bg-clip-text drop-shadow-lg">
          <span> I&apos;m</span> Mukit Hossen
        </span>
      </h1>
      <h3 className="text-slate-100 text-3xl font-semibold pt-7">
        I am a Front-End React Developer{" "}
      </h3>
      <p className="text-slate-100 w-full lg:max-w-3xl font-semibold text-lg pt-5">
        I am a passionate Junior React Developer with a growing skill set in
        building dynamic and responsive web applications. With a strong
        foundation in JavaScript and React, I aim to create user-friendly and
        efficient solutions.
      </p>
      <div className="flex items-center gap-5 mt-5">
        <Link href="https://github.com/MukitHossen7" target="_blank">
          <FaGithub className="text-gray-200 text-3xl" />
        </Link>

        <Link to="https://github.com/MukitHossen7" target="_blank">
          <FaLinkedin className="text-gray-200 text-3xl" />
        </Link>
      </div>
    </div>
  );
};

export default MyIdentity;
