import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export const loginLoader = ({ request }) => {
  const message = new URL(request.url).searchParams.get("message");
  return message;
};

const Login = () => {
  const message = useLoaderData();

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <section className="flex flex-col items-center px-7 min-h-[60vh] justify-center">
      {message && (
        <h2 className="text-red-500 text-xl font-bold absolute top-[20%]">
          {message}
        </h2>
      )}
      <h2 className="text-4xl font-bold mb-5">Sign in to your account</h2>
      <form
        className="login-form flex flex-col w-full max-w-[500px]"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email address"
          value={loginFormData.email}
        />

        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          value={loginFormData.password}
        />
        <button className="bg-[#FF8C38] border-none rounded-md h-14 mt-6 text-white ">
          Log in
        </button>
      </form>
    </section>
  );
};

export default Login;
