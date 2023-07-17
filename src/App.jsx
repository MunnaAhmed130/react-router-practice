import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vanLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as vanDetailsLoader } from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import "./App.css";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans, { hostLoader } from "./pages/Host/HostVans";
import HostVanDetails, { hostDetailsLoader } from "./pages/Host/HostVanDetails";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanInfo from "./pages/Host/HostVanInfo";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Login, { loginAction, loginLoader } from "./pages/Login";
import { requireAuth } from "./utils";

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
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="vans"
        element={<Vans />}
        loader={vanLoader}
        // loader={() => {
        //   const vans = getVans();
        //   return vans;
        // }}
        errorElement={<Error />}
      />

      <Route
        path="vans/:id"
        element={<VanDetail />}
        loader={vanDetailsLoader}
        errorElement={<Error />}
      />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetails />}
          loader={hostDetailsLoader}
          errorElement={<Error />}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({ request }) => await requireAuth(request)}
          />
        </Route>
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
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
