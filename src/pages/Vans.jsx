import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const filterbtn = ["simple", "luxury", "rugged"];

  // console.log(vans);
  return (
    <section className=" py-16 px-16">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-4xl font-bold">Explore out van options</h2>
        <div className="flex  gap-5 py-5 text-[#4d4d4d]">
          {filterbtn.map((btn) => (
            <button
              key={btn}
              className="bg-[#ffead0] capitalize rounded px-7 py-2"
            >
              {btn}
            </button>
          ))}
          <button className="underline underline-offset-4">
            Clear filters
          </button>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 py-10">
          {vans.map((van) => (
            <Van key={van.name} van={van} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Van = ({ van }) => {
  const { id, name, imageUrl, price, type } = van;
  return (
    <Link to={`/vans/${id}`}>
      {/* <Link to={`/vans/${id}`} state={{ fromVan: true }}> */}
      <img
        src={imageUrl}
        className="rounded-md lg:h-96 h-80 w-full object-cover object-left-bottom"
        alt=""
      />
      <div className="flex justify-between pt-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <div>
          <span className="text-xl font-bold">${price}</span>
          <span className="text-sm leading-3 block text-right">/day</span>
        </div>
      </div>
      <button
        className={`px-4 py-2 capitalize rounded text-[#ffead0]
        ${type == "simple" && `bg-[#e17654]`}
        ${type == "rugged" && `bg-[#115e59]`}
        ${type == "luxury" && `bg-[#161616]`}
        `}
      >
        {type}
      </button>
    </Link>
  );
};

export default Vans;
