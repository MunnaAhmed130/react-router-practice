import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import TypeButton from "../components/TypeButton";
import { filterbtn } from "../assets/constant";
import { getVans } from "../api";

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(error);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  // const location = useLocation();
  // console.log(location);

  const displayedVan = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  // getVans("/api/vans");
  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        console.log("there was an error");
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  if (loading) {
    return <h2 className="text-4xl font-bold mt-14">Laoding...</h2>;
  }

  if (error) {
    return <h2 className="text-4xl font-bold mt-14">{error.message}</h2>;
  }

  return (
    <section className=" py-16 px-16">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-4xl font-bold">Explore out van options</h2>
        <FilterButtons
          setSearchParams={setSearchParams}
          typeFilter={typeFilter}
        />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 py-10">
          {displayedVan.map((van) => (
            <Van
              key={van.name}
              van={van}
              searchParams={searchParams}
              typeFilter={typeFilter}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FilterButtons = ({ setSearchParams, typeFilter }) => {
  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="flex  gap-5 py-5 text-[#4d4d4d]">
      {filterbtn.map((btn) => (
        <button
          // to={`?type=${btn}`}
          // onClick={() => setSearchParams({ type: btn })}
          onClick={() => handleFilterChange("type", btn)}
          key={btn}
          className={`${
            typeFilter === btn && `selected`
          } van-type ${btn} bg-[#ffead0] capitalize rounded px-7 py-2`}
        >
          {btn}
        </button>
      ))}

      {typeFilter && (
        <Link to="." className="underline underline-offset-4 flex items-center">
          Clear filters
        </Link>
      )}
    </div>
  );
};

const Van = ({ van, searchParams, typeFilter }) => {
  const { id, name, imageUrl, price, type } = van;

  return (
    <Link to={id} state={{ search: searchParams.toString(), type: typeFilter }}>
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

      <TypeButton type={type} className="px-4 py-1.5 rounded-md" />
    </Link>
  );
};

export default Vans;
