import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { loginUser } from "../api";

export const loginLoader = ({ request }) => {
  const message = new URL(request.url).searchParams.get("message");
  return message;
};

const Login = () => {
  const message = useLoaderData();
  const navigate = useNavigate();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  console.log(error, status);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    loginUser(loginFormData)
      .then((data) => {
        console.log(data);
        navigate("/host", { replace: true });
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setStatus("idle"));
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
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
          placeholder="Email address"
          value={loginFormData.email}
        />

        <input
          type="password"
          name="password"
          // onChange={handleChange}
          onChange={(e) => handleChange(e)}
          placeholder="Password"
          value={loginFormData.password}
        />
        {error && <h2>{error.message}</h2>}
        <button
          className="bg-[#FF8C38] border-none rounded-md h-14 mt-6 text-white"
          disabled={status === "submitting" && true}
          // onClick={() => setStatus("submitting")}
        >
          {status === "idle" ? "Log in" : "submitting..."}
        </button>
      </form>
    </section>
  );
};

export default Login;
