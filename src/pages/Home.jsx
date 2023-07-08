import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-mountain bg-no-repeat bg-center bg-cover px-16">
      <div className="max-w-7xl mx-auto min-h-[calc(100vh_-_192px)]  flex flex-col justify-center py-32 gap-10">
        <h3 className="font-extrabold text-4xl sm:text-7xl text-white">
          You got the travel plans, we got the travel vans.
        </h3>
        <p className="text-white text-2xl">
          Add adventure to your life by joining the #vanlife movement rent the
          perfect van to make your perfect road trip.
        </p>
        <Link className="bg-[#ff8c38] text-white py-5 text-center">
          Find your van
        </Link>
      </div>
    </section>
  );
};

export default Home;
