import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const [van] = useOutletContext();
  return (
    <p>
      <span className="text-2xl font-medium">${van.price}</span>/day
    </p>
  );
};

export default HostVanPricing;
