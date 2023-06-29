import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="w-full bg-[#252525]">
      <p className="text-[#AAAAAA] py-8 flex justify-center items-center font-medium">
        <LuCopyright className="inline-block text-xl" /> &nbsp;2022 #VANLIFE
      </p>
    </footer>
  );
};

export default Footer;
