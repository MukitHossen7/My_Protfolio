import { DiHtml5 } from "react-icons/di";
import { FaCss3Alt, FaGitAlt, FaNode, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  return (
    <div className=" flex flex-col items-center ">
      <div className="w-10/12 md:w-10/12 lg:w-10/12 xl:container mx-auto">
        <h1 className="text-2xl font-bold text-gray-50 text-center mb-6 ">
          My Skills
        </h1>

        {/* Skills Grid */}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-14">
          <div className="text-center flex flex-col items-center ">
            <DiHtml5 className="text-5xl text-[#3CCF91]" />
            <p className="text-gray-300  mt-3 text-sm">HTML5</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <FaCss3Alt className="text-5xl text-[#3CCF91]" />
            <p className="text-gray-300  mt-3 text-sm">CSS3</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <SiTailwindcss className="text-5xl text-[#3CCF91]" />
            <p className="text-gray-300  mt-3 text-sm">Tailwind</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <RiJavascriptFill className="text-5xl text-[#3CCF91]" />
            <p className="text-gray-300  mt-3 text-sm">JavaScript</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <FaReact className="text-5xl text-[#3CCF91]" />
            <p className="text-gray-300  mt-3 text-sm">React</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <FaNode className="text-5xl text-[#3CCF91]" />
            <p className="text-gray-300  mt-3 text-sm">Node.js</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <SiExpress className="text-5xl text-[#3CCF91]" />
            <p className="text-gray-300  mt-3 text-sm">Express.js</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <SiMongodb className="text-5xl text-[#3CCF91]" />
            <p className="text-gray-300  mt-3 text-sm">Mongodb</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <FaGitAlt className="text-5xl text-[#3CCF91]" />
            <p className="text-gray-300  mt-3 text-sm">Git</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <VscVscode className="text-5xl text-[#3CCF91]" />
            <p className="text-gray-300  mt-3 text-sm">Vscode</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
