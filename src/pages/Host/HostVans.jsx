import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function hostLoader({ request }) {
  await requireAuth(request);
  return getHostVans();
}

const HostVans = () => {
  const vans = useLoaderData();
  console.log(vans);
  // const [vans, setVans] = useState([]);
  // useEffect(() => {
  //   fetch("/api/host/vans")
  //     .then((res) => res.json())
  //     .then((data) => setVans(data.vans));
  // }, []);

  return (
    <section>
      <h2 className="text-3xl font-bold py-10">Your listed vans</h2>
      {/* {vans.length > 0 ? ( */}
      <div>
        {vans.map((van) => (
          <Van van={van} key={van.id} />
        ))}
      </div>
      {/* ) : (
        <h2>Loading...</h2>
      )} */}
    </section>
  );
};

const Van = ({ van }) => {
  const { id, name, price, imageUrl } = van;

  return (
    <Link to={id}>
      <div className="bg-white rounded p-5 mb-5 flex gap-5">
        <img src={imageUrl} className="w-20 rounded" alt="" />
        <div className=" flex flex-col justify-center">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p>${price}/day</p>
        </div>
      </div>
    </Link>
  );
};

export default HostVans;
