import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

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
    <div>
      <Link
        to="/host/vans"
        className="underline underline-offset-[3px] flex items-center font-medium text-[#201f1d] my-12"
      >
        <BiArrowBack className="inline-block mr-2 text-[#858585]" />
        Back to all vans
      </Link>

      {van.map((van) => (
        <HostVan key={van.id} van={van} />
      ))}
    </div>
  );
};

const HostVan = ({ van }) => {
  const { name, imageUrl } = van;

  return (
    <div className="bg-white my-10">
      <div>
        <img src={imageUrl} className="w-40 h-40" alt="" />
      </div>
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default HostVanDetails;
