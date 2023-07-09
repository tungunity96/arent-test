import ButtonBG from "../assets/components/button-bg.png";

function CategoryButton({ category, buttonCb }) {
  const buttonStyle = {
    background: `url(${ButtonBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center center",
  };
  return (
    <div
      style={buttonStyle}
      className="w-[136px] h-[136px] flex flex-col justify-center items-center cursor-pointer"
      onClick={() => buttonCb()}
    >
      <img src={category.icon} alt="button" />
      <div className="text-light font-inter">{category.title}</div>
    </div>
  );
}

export default CategoryButton;
