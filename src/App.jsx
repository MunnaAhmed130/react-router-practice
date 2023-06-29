import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

const Greeting = () => {
  return <h1>Hello to React router</h1>;
};

const About = () => {
  return <h1>Welcome to about page</h1>;
};

const Nav = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
