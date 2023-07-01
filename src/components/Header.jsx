import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navlist = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Vans",
      path: "/vans",
    },
  ];

  return (
    <header className="bg-[#FFF7ED]">
      <div className="flex justify-between max-w-7xl mx-auto py-8 px-16">
        <Link to="/" className="font-black text-2xl text-black">
          #VANLIFE
        </Link>
        <nav>
          {navlist.map((nav) => (
            <NavLink
              key={nav.path}
              to={nav.path}
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-4 decoration-black decoration-2 font-semibold text-[#161616] first:mr-10"
                  : "text-[#4d4d4d] first:mr-10 font-semibold"
              }
            >
              {nav.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
