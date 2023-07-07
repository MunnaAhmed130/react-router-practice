const TypeButton = ({ type, className }) => {
  return (
    <button
      className={`capitalize text-[#ffead0] ${className}
    ${type == "rugged" && `bg-[#115e59]`}
    ${type == "luxury" && `bg-[#161616]`}
    ${type == "simple" && `bg-[#e17654]`}
    `}
    >
      {type}
    </button>
  );
};

export default TypeButton;
