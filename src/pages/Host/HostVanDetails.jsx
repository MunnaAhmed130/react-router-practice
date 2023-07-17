import { Suspense, useEffect, useState } from "react";
import {
  Await,
  Link,
  NavLink,
  Outlet,
  defer,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import TypeButton from "../../components/TypeButton";
import { vansNav } from "../../assets/constant";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function hostDetailsLoader({ params, request }) {
  // console.log(request, params);
  await requireAuth(request);
  return defer({ van: getHostVans(params.id) });
}

const HostVanDetails = () => {
  const vanPromise = useLoaderData();

  // const { id } = useParams();
  // const [van, setVan] = useState([]);
  // console.log(van);

  // useEffect(() => {
  //   fetch(`/api/host/vans/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setVan(data.vans));
  // }, [id]);

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
      <Suspense fallback={<h3>Loading ...</h3>}>
        <Await resolve={vanPromise.van}>
          {(van) => {
            return <HostVan key={van.id} van={van} />;
          }}
        </Await>
      </Suspense>
      {/* // {van.length > 0 ? (
      //   van.map((van) => <HostVan key={van.id} van={van} />)
      // ) : (
      //   <h3>Loading ...</h3>
      // )} */}
    </section>
  );
};

const HostVan = ({ van }) => {
  const { name, imageUrl, type, price } = van;

  return (
    <section className="bg-white my-10 rounded p-7">
      <div className="flex gap-5 items-center mb-7">
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
      <VanInfoNav />
      {/*
      you can send data as array or object
       <Outlet context={{ van }} />
        */}
      <Outlet context={[van]} />
    </section>
  );
};

const VanInfoNav = () => {
  const vansNavlist = "mr-7";
  return (
    <nav className="mb-7">
      {vansNav.map((nav) => (
        <NavLink
          end
          key={nav.title}
          to={nav.path}
          className={({ isActive }) =>
            isActive
              ? `font-bold underline underline-offset-4 decoration-black decoration-2 text-[#161616] ${vansNavlist}`
              : `${vansNavlist}`
          }
        >
          {nav.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default HostVanDetails;
