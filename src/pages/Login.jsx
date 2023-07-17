import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  // useNavigate,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../api";

export const loginLoader = ({ request }) => {
  const message = new URL(request.url).searchParams.get("message");
  return message;
};

export const loginAction = async ({ request }) => {
  const path = new URL(request.url).searchParams.get("redirectTo") || "/host";
  // console.log(path);
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);

  try {
    const data = await loginUser({ email, password });
    console.log(data);
    localStorage.setItem("loggedin", true);
    // return err.message;
    return redirect(path);
    // return null;
  } catch (err) {
    console.log(err);
    return err.message;
  }
  // redirect
};

const Login = () => {
  const message = useLoaderData();
  const error = useActionData();
  const navigation = useNavigation();
  const status = navigation.state;
  console.log(error, status);

  // const navigate = useNavigate();
  // const [status, setStatus] = useState("idle");
  // const [error, setError] = useState(null);
  // const [loginFormData, setLoginFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // console.log(status);

  // const handleSubmit = (e) => {
  // e.preventDefault();
  // setStatus("submitting");
  // setError(null);

  // loginUser(loginFormData)
  //   .then((data) => {
  //     console.log(data);
  //     navigate("/host", { replace: true });
  //   })
  //   .catch((err) => {
  //     setError(err);
  //   })
  //   .finally(() => setStatus("idle"));
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setLoginFormData((prev) => ({ ...prev, [name]: value }));
  // };
  // if (isLoggedIn) {
  //   return navigate("/host");
  // }

  return (
    <section className="flex flex-col items-center px-7 min-h-[60vh] justify-center">
      {message && (
        <h2 className="text-red-500 text-xl font-bold absolute top-[20%]">
          {message}
        </h2>
      )}
      <h2 className="text-4xl font-bold mb-5">Sign in to your account</h2>
      <Form
        replace
        className="login-form flex flex-col w-full max-w-[500px]"
        // onSubmit={(e) => handleSubmit(e)}
        method="post"
      >
        <input
          type="email"
          name="email"
          // onChange={(e) => handleChange(e)}
          placeholder="Email address"
          // value={loginFormData.email}
        />

        <input
          type="password"
          name="password"
          // onChange={handleChange}
          // onChange={(e) => handleChange(e)}
          placeholder="Password"
          // value={loginFormData.password}
        />
        {error && <h2>{error}</h2>}
        <button
          className="bg-[#FF8C38] border-none rounded-md h-14 mt-6 text-white"
          disabled={status === "submitting" && true}
        >
          {status === "idle" ? "Log in" : "Logging in..."}
          {/* Log in */}
        </button>
      </Form>
    </section>
  );
};

export default Login;
