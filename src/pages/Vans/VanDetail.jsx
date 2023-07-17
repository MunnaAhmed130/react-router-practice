import {
  Await,
  Link,
  defer,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import TypeButton from "../../components/TypeButton";
import { getVan, getVans } from "../../api";
import { Suspense } from "react";

export function loader({ params }) {
  //   console.log(params.id);
  // return defer({ van: getVans(params.id) });
  return defer({ van: getVan(params.id) });
}

const VanDetail = () => {
  const vanPromise = useLoaderData();
  // console.log(vanPromise);
  // const { id } = useParams();
  const location = useLocation();
  // const [van, setVan] = useState([]);

  const { state } = location;
  const search = state?.search || "";
  const vanType = state?.type || "all";

  // console.log(van, vanType);
  // const { type, name, imageUrl, price, description } = van
  // useEffect(() => {
  //   fetch(`/api/vans/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setVan(data.vans));
  // }, [id]);
  // console.log(van);

  return (
    <section className="max-w-7xl mx-auto py-16 px-16">
      <Link
        to={`..?${search}`}
        relative="path"
        className="underline  underline-offset-[3px] inline font-medium text-[#201f1d]"
      >
        <BiArrowBack className="inline-block mr-2 text-[#858585]" />
        {/* {location.state?.type ? `Back to ${type} vans` : ` Back to all vans`} */}
        Back to {vanType} vans
      </Link>
      {/* {van ? <SingleVan van={van} /> : <h2>Loading</h2>} */}
      <Suspense fallback={<h2>Loading ....</h2>}>
        <Await resolve={vanPromise.van}>
          {(van) => {
            console.log(van);
            return <SingleVan van={van} />;
          }}
        </Await>
      </Suspense>
    </section>
  );
};

const SingleVan = ({ van }) => {
  const { type, name, imageUrl, price, description } = van;

  return (
    <div>
      <div className="">
        <img src={imageUrl} className="my-16 rounded-lg" alt="" />
      </div>

      <TypeButton type={type} className="font-medium px-4 py-1.5 rounded-md" />

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
  );
};
export default VanDetail;
