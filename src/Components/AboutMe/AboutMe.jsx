const AboutMe = () => {
  return (
    <div>
      <div className="top-0 z-[-2]  w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="w-10/12 md:w-10/12 lg:w-10/12 xl:container mx-auto items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co.com/Bc3Jt9R/download.jpg"
              alt="Profile"
              className="rounded-full object-cover shadow-lg w-64 h-64 ring-2 ring-teal-400"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a React Developer. I specialize in building modern,
              responsive web applications using React, Node.js, and MongoDB. I
              also have experience in creating static websites with HTML5, CSS3,
              and JavaScript (ES6).
            </p>
            <h2 className="text-2xl font-semibold mb-4">
              Technologies I Work With:
            </h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-pink-500">Frontend</h3>
              <p className="text-gray-400">
                JavaScript (ES6), React.js, Redux, HTML5, CSS3, React Bootstrap,
                Material UI
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-purple-500">Backend</h3>
              <p className="text-gray-400">Node.js, Express.js, MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
