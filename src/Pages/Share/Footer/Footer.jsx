const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#020617] text-gray-100 text-center py-6">
      <p className="text-lg font-medium pb-1">
        Designed and Developed by{" "}
        <span className="text-teal-500">Mukit Hossen</span>
      </p>
      <p>Copyright © {year}, All Rights Reserved</p>
    </div>
  );
};

export default Footer;
