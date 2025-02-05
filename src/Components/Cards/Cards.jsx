import "react-awesome-button/dist/styles.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
// bg-[#080808]
// bg-[#292929]
// eslint-disable-next-line react/prop-types
const Cards = ({ project }) => {
  const { name, image, description, features, live_link, github_link } =
    project || {};
  return (
    <div className="w-full bg-black/20 rounded-xl shadow-md overflow-hidden flex flex-col border border-gray-800">
      {/* Image Section */}
      <div className="">
        <img
          src={image}
          alt="Gerez - Car Repair Services"
          className="w-full h-60 object-cover "
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col justify-between flex-grow px-4 pb-4">
        <div>
          <h3 className="text-lg font-semibold mt-3  pb-3 text-gray-100">
            {name}
          </h3>
          <p className="text-sm text-gray-400 pb-5">
            {description.slice(0, 90)} ....
          </p>
          <div className="flex flex-wrap gap-2 ">
            {features.map((feature, index) => (
              <span
                key={index}
                className="px-2 py-[2px] border border-gray-800  text-gray-300 rounded-full text-xs"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-2 mt-7">
          <Link
            to={`${live_link}`}
            target="_blank"
            className="bg-black border border-[#3CCF91] text-gray-200 px-2 py-2 rounded text-sm flex items-center gap-1"
          >
            <FiExternalLink className="text-xl" />
            Live
          </Link>
          <Link
            to={`${github_link}`}
            target="_blank"
            href="#"
            className="bg-black border border-[#3CCF91] flex text-gray-200 px-2 py-2 rounded text-sm items-center gap-1"
          >
            <FaGithub className="text-xl" />
            Github
          </Link>
          <Link
            to="/details/1"
            target="_blank"
            href="#"
            className="bg-black border border-[#3CCF91] flex text-gray-200 px-2 py-2 rounded text-sm items-center gap-1"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
