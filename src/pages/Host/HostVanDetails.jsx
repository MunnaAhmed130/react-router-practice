import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import TypeButton from "../../components/TypeButton";

const HostVanDetails = () => {
  const { id } = useParams();
  const [van, setVan] = useState([]);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [id]);

  // console.log(van);

  return (
    <section>
      <Link
        to=".."
        relative="path"
        className="underline underline-offset-[3px] flex items-center font-medium text-[#201f1d] my-12"
      >
        <BiArrowBack className="inline-block mr-2 text-[#858585]" />
        Back to all vans
      </Link>

      {van.length > 0 ? (
        van.map((van) => <HostVan key={van.id} van={van} />)
      ) : (
        <h3>Loading ...</h3>
      )}
    </section>
  );
};

const HostVan = ({ van }) => {
  const { name, imageUrl, type, price } = van;

  return (
    <div className="bg-white my-10 rounded p-7">
      <div className="flex gap-5 items-center">
        <div>
          <img src={imageUrl} className="w-40 h-40" alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <TypeButton type={type} className="py-1.5 px-4 rounded-md" />
          </div>
          <p className="font-bold text-3xl">{name}</p>
          <p className="text-xl">
            <span className="font-bold">${price}</span>
            /day
          </p>
        </div>
      </div>
    </div>
  );
};

export default HostVanDetails;
