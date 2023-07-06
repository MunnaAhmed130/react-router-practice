import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="w-full bg-[#252525] h-24 mt-auto ">
      <p className="text-[#AAAAAA]  flex h-full justify-center items-center font-medium max-w-7xl mx-auto">
        <LuCopyright className="inline-block text-xl" /> &nbsp;2022 #VANLIFE
      </p>
    </footer>
  );
};

export default Footer;
