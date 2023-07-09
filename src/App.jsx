import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vanLoader } from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import "./App.css";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostVanDetails from "./pages/Host/HostVanDetails";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanInfo from "./pages/Host/HostVanInfo";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";

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

// transitional method
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vanLoader} />
      <Route path="vans/:id" element={<VanDetail />} />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:id" element={<HostVanDetails />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

// old method
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* nested route */}
//         <Route path="/" element={<Layout />}>
//           {/*
//           another way to nest route
//            <Route element={<Layout />}>
//          <Route path="/" element={<Home />} />
//          */}

//           {/* index route below*/}
//           <Route index element={<Home />} />

//           <Route path="about" element={<About />} />
//           <Route path="vans" element={<Vans />} />
//           <Route path="vans/:id" element={<VanDetail />} />

//           {/*
//           nested route
//           <Route path="vans">
//             <Route index element={<Vans />} />
//             <Route path=":id" element={<VanDetail />} />
//           </Route>
//           */}

//           {/* nested route */}
//           <Route path="host" element={<HostLayout />}>
//             {/*
//              this code works like index route
//              <Route path="" element={<Dashboard />} />
//              */}

//             {/* index route below*/}
//             <Route index element={<Dashboard />} />

//             <Route path="income" element={<Income />} />
//             <Route path="vans" element={<HostVans />} />
//             <Route path="vans/:id" element={<HostVanDetails />}>
//               <Route index element={<HostVanInfo />} />
//               <Route path="pricing" element={<HostVanPricing />} />
//               <Route path="photos" element={<HostVanPhotos />} />
//             </Route>

//             {/*
//             vans nested route
//             <Route path="vans" element={<Outlet />}>
//               <Route index element={<HostVans />} />
//               <Route path=":id" element={<HostVanDetails />} />
//             </Route> */}

//             <Route path="reviews" element={<Reviews />} />
//           </Route>
//           <Route path="*" element={<NotFound />} />
//         </Route>
//       </Routes>
//       {/* <Footer /> */}
//     </BrowserRouter>
//   );
// }

export default App;
