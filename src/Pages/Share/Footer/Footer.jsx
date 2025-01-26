const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-black  text-center py-6">
      <p className="text-sm text-gray-300 pb-1">
        Designed and Developed by{" "}
        <span className="text-[#3CCF91]">Mukit Hossen</span>
      </p>
      <p className="text-sm text-gray-300">
        Copyright © {year}, All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
