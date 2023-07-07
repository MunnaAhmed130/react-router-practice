import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navlist = [
    {
      title: "Host",
      path: "host",
    },
    {
      title: "About",
      path: "about",
    },
    {
      title: "Vans",
      path: "vans",
    },
  ];

  return (
    <header className="h-24 px-16">
      <div className="flex justify-between max-w-7xl mx-auto h-full items-center ">
        <Link to="/" className="font-black text-2xl text-black">
          #VANLIFE
        </Link>
        <nav className="flex items-center">
          {navlist.map((nav) => (
            <NavLink
              key={nav.path}
              to={nav.path}
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-4 decoration-black decoration-2 font-bold text-[#161616] last:mr-0 mr-10"
                  : "text-[#4d4d4d] last:mr-0 mr-10 "
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
