import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const [van] = useOutletContext();
  console.log(van);
  return (
    <div>
      <img src={van.imageUrl} className="w-32 h-32 rounded-md" alt="" />
    </div>
  );
};

export default HostVanPhotos;
