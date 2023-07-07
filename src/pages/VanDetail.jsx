import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import TypeButton from "../components/TypeButton";

const VanDetail = () => {
  const { id } = useParams();

  const [van, setVan] = useState([]);
  const { type, name, imageUrl, price, description } = van;

  // const location = useLocation();
  // console.log(location);
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [id]);

  // console.log(van);
  return (
    <section className="max-w-7xl mx-auto py-16 px-16">
      <Link
        to=".."
        relative="path"
        className="underline underline-offset-[3px] flex items-center font-medium text-[#201f1d]"
      >
        <BiArrowBack className="inline-block mr-2 text-[#858585]" />
        Back to all vans
      </Link>
      {van ? (
        <div>
          <div className="">
            <img src={imageUrl} className="my-16 rounded-lg" alt="" />
          </div>

          <TypeButton
            type={type}
            className="font-medium px-4 py-1.5 rounded-md"
          />

          <h1 className="font-bold text-4xl py-5">{name}</h1>

          <div>
            <span className="font-bold text-2xl">${price}</span>
            <span className="text-xl">/day</span>
          </div>

          <p className="py-5">{description} </p>

          <button className="w-full bg-[#ff8c38] text-white font-bold py-4 rounded">
            Rent this van
          </button>
        </div>
      ) : (
        <h2>Loading</h2>
      )}
    </section>
  );
};

export default VanDetail;
