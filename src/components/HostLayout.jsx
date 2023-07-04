import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const hostNavlist = [
    {
      title: "Dashboard",
      path: "/host",
    },
    {
      title: "Income",
      path: "/host/income",
    },
    {
      title: "Reviews",
      path: "/host/reviews",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto py-8 px-16">
      <nav className="host-nav flex justify-between max-w-xl border">
        {/* <Link to="/host">Dashbaord</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/reviews">Reviews</Link> */}
        {hostNavlist.map((nav) => (
          <NavLink
            key={nav.path}
            end
            to={nav.path}
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-4 decoration-black decoration-2 font-semibold text-[#161616]"
                : "text-[#4d4d4d] font-semibold"
            }
          >
            {nav.title}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
