// eslint-disable-next-line react/prop-types
const Cards = ({ project }) => {
  const { name, image, description, features } = project || {};
  return (
    <div className="w-full bg-slate-900 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-52 px-2 pt-2 overflow-hidden group">
        <img
          src={image}
          alt="Gerez - Car Repair Services"
          className="w-full h-auto object-cover transform group-hover:translate-y-[-74%] transition-transform duration-[3s] ease-in-out rounded-md"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col justify-between flex-grow px-4 pb-4">
        <div>
          <h3 className="text-xl font-semibold pt-5 pb-3 text-gray-100">
            {name}
          </h3>
          <p className="text-sm text-gray-300 pb-5">{description}</p>
          <div className="flex flex-wrap gap-2 ">
            {features.map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-slate-800 text-gray-200 rounded text-sm"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-2 mt-7">
          <a
            href="#"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm"
          >
            Live Link
          </a>
          <a
            href="#"
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
