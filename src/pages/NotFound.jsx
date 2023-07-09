import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="px-16 flex flex-col justify-center min-h-[calc(100vh_-_192px)] gap-5">
      {/* <div> */}
      <h4 className="text-5xl leading-snug font-bold">
        Sorry, the page you were looking for was not found
      </h4>
      <Link
        to=".."
        className="bg-black text-white text-xl text-center rounded-lg py-5"
      >
        Return to home
      </Link>
      {/* </div> */}
    </div>
  );
};

export default NotFound;
