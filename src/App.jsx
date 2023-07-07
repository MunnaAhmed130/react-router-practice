import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import Layout from "./components/Layout";
import "./App.css";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVanDetails from "./pages/Host/HostVanDetails";

// const Greeting = () => {
//   return <h1>Hello to React router</h1>;
// };

// const About = () => {
//   return <h1>Welcome to about page</h1>;
// };

// const Nav = () => {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//     </nav>
//   );
// };

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* nested route */}
        <Route path="/" element={<Layout />}>
          {/*
          another way to nest route
           <Route element={<Layout />}> 
         <Route path="/" element={<Home />} /> 
         */}

          {/* index route below*/}
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          {/*
          nested route
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route> 
          */}

          {/* nested route */}
          <Route path="host" element={<HostLayout />}>
            {/*
             this code works like index route
             <Route path="" element={<Dashboard />} /> 
             */}

            {/* index route below*/}
            <Route index element={<Dashboard />} />

            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />} />

            {/*
            vans nested route
            <Route path="vans" element={<Outlet />}>
              <Route index element={<HostVans />} />
              <Route path=":id" element={<HostVanDetails />} />
            </Route> */}

            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
