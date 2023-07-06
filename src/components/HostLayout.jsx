import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const hostNavlist = [
    // {
    //   title: "Dashboard",
    //   path: "/host",
    // },
    {
      title: "Income",
      path: "/host/income",
    },
    {
      title: "Vans",
      path: "/host/vans",
    },
    {
      title: "Reviews",
      path: "/host/reviews",
    },
  ];

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
        <nav className="mb-10 flex justify-between max-w-xl">
          {/*
         <Link to="/host">Dashbaord</Link>
         <Link to="/host/income">Income</Link>
        <Link to="/host/reviews">Reviews</Link> 
      */}

          <NavLink
            end
            to="/host"
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
