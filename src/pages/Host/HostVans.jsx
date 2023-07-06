import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  return (
    <section>
      <h2 className="text-3xl font-bold py-10">Your listed vans</h2>
      <div>
        {vans.map((van) => (
          <Van van={van} key={van.id} />
        ))}
      </div>
    </section>
  );
};

const Van = ({ van }) => {
  const { id, name, price, imageUrl } = van;

  return (
    <Link to={`/host/vans/${id}`}>
      <div className="bg-white rounded p-5 mb-5 flex gap-5">
        <img src={imageUrl} className="w-20 rounded" alt="" />
        <div className=" flex flex-col justify-center">
          <h3 className="text-xl ">{name}</h3>
          <p>${price}/day</p>
        </div>
      </div>
    </Link>
  );
};

export default HostVans;
