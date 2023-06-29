import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#FFF7ED]">
      <div className="flex justify-between max-w-7xl mx-auto py-8 px-16">
        <Link to="/">
          <h1 className="font-black text-2xl text-black">#VANLIFE</h1>
        </Link>
        <nav>
          <Link to="/about" className="text-[#4d4d4d]">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
