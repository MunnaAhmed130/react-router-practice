import { NavLink, Outlet } from "react-router-dom";
import { hostNavlist } from "../assets/constant";

const HostLayout = () => {
  const hostLayoutStyle = {
    fontWeight: "bold",
    textDecorationLine: "underline",
    textUnderlineOffset: "4px",
    textDecorationThickness: "2px",
    color: "#161616",
  };

  return (
    <div className="py-8 px-16">
      <div className="max-w-7xl mx-auto ">
        <nav className="host-nav mb-10 flex justify-between max-w-xl">
          <NavLink
            end
            to="."
            style={({ isActive }) => (isActive ? hostLayoutStyle : null)}
          >
            Dashboard
          </NavLink>

          {hostNavlist.map((nav) => (
            <NavLink
              key={nav.path}
              to={nav.path}
              // className={({ isActive }) =>
              //   isActive
              //     ? "underline underline-offset-4 decoration-black decoration-2 font-semibold text-[#161616]"
              //     : "text-[#4d4d4d] font-medium"
              // }
              style={({ isActive }) => (isActive ? hostLayoutStyle : null)}
            >
              {nav.title}
            </NavLink>
          ))}
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default HostLayout;
