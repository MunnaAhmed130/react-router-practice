import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navlist = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Vans",
      path: "/vans",
    },
  ];

  return (
    <header className="bg-[#FFF7ED]">
      <div className="flex justify-between max-w-7xl mx-auto py-8 px-16">
        <Link to="/">
          <h1 className="font-black text-2xl text-black">#VANLIFE</h1>
        </Link>
        <nav>
          {navlist.map((nav) => (
            <NavLink
              key={nav.path}
              to={nav.path}
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-4 decoration-black navlink"
                  : "navlink"
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
