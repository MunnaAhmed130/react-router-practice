import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const [van] = useOutletContext();
  // console.log(van);
  const { name, type, description } = van;

  return (
    <div className="info-container">
      <p>
        <span>Name:</span> &nbsp;
        {name}
      </p>
      <p className="capitalize">
        <span>Category:</span>&nbsp;
        {type}
      </p>
      <p>
        <span>Description:</span> &nbsp;
        {description}
      </p>
      <p>
        <span>Visibility:</span> &nbsp; Public
      </p>
    </div>
  );
};

export default HostVanInfo;
