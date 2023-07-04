import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import "./App.css";

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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
