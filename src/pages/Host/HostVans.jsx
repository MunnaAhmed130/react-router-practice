import { useEffect, useState } from "react";

const HostVans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  return (
    <section>
      <h2>Your listed vans</h2>
      <div>
        {vans.map((van) => (
          <Van van={van} key={van.id} />
        ))}
      </div>
    </section>
  );
};

const Van = ({ van }) => {
  const { name, price, imageUrl } = van;
  return (
    <div>
      <img src={imageUrl} alt="" />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default HostVans;
