import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const VanDetail = () => {
  const { id } = useParams();

  const [van, setVan] = useState([]);
  const { type, name, imageUrl, price, description } = van;
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, []);
  //   console.log(van);
  return (
    <section className="max-w-7xl mx-auto py-16 px-16">
      <button className="underline underline-offset-[3px] flex items-center font-medium text-[#201f1d]">
        <BiArrowBack className="inline-block mr-2 text-[#858585]" />
        Back to all vans
      </button>
      <img src={imageUrl} className="py-16 rounded" alt="" />
      <button
        className={`px-4 py-2 capitalize rounded text-[#ffead0] font-semibold
        ${type == "simple" && `bg-[#e17654]`}
        ${type == "rugged" && `bg-[#115e59]`}
        ${type == "luxury" && `bg-[#161616]`}
        `}
      >
        {type}
      </button>
      <h1 className="font-bold text-4xl py-5">{name}</h1>
      <div>
        <span className="font-bold text-2xl">${price}</span>
        <span className="text-xl">/day</span>
      </div>
      <p className="py-5">{description} </p>
      <button className="w-full bg-[#ff8c38] text-white font-bold py-4 rounded">
        Rent this van
      </button>
    </section>
  );
};

export default VanDetail;