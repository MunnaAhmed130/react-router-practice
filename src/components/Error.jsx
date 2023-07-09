import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1 className="text-center mt-60">{error.message}</h1>
      <pre className="text-center">
        {error.status} - {error.statusText}
      </pre>
    </>
  );
};

export default Error;
